import * as auth from "$lib/server/auth";
import { sequence } from "@sveltejs/kit/hooks";
import { text, json, type Handle } from "@sveltejs/kit";

function isFormContentType(request: Request) {
  return ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"].includes(
    request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase() ?? "",
  );
}

function csrf(allowedPaths: string[] = [], allowedOrigins: string[] = []): Handle {
  return async ({ event, resolve }) => {
    const { request, url } = event;
    const requestOrigin = request.headers.get("origin");
    const isSameOrigin = requestOrigin === url.origin;
    const isAllowedOrigin = allowedOrigins.includes(requestOrigin ?? "");
    const forbidden =
      isFormContentType(request) &&
      ["POST", "PUT", "PATCH", "DELETE"].includes(request.method) &&
      !isSameOrigin &&
      !isAllowedOrigin &&
      !allowedPaths.includes(url.pathname);

    if (forbidden) {
      const message = `Cross-site ${request.method} form submissions are forbidden`;

      if (request.headers.get("accept") === "application/json") {
        return json({ message }, { status: 403 });
      }

      return text(message, { status: 403 });
    }

    return resolve(event);
  };
}

function authentication(): Handle {
  return async ({ event, resolve }) => {
    const sessionToken = event.cookies.get(auth.sessionCookieName);

    if (!sessionToken) {
      event.locals.user = null;
      event.locals.session = null;
      return resolve(event);
    }

    const { session, user } = await auth.validateSessionToken(sessionToken);
    if (session) {
      auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
    } else {
      auth.deleteSessionTokenCookie(event);
    }

    event.locals.user = user;
    event.locals.session = session;

    return resolve(event);
  };
}

export const handle: Handle = sequence(csrf(), authentication());
