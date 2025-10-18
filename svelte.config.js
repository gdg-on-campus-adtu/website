import adapter from "@deno/svelte-adapter";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: vitePreprocess(),
  compilerOptions: {
    experimental: {
      async: true,
    },
  },
  kit: {
    adapter: adapter(),
    csrf: {
      // NOTE: Implement it manually in src/hooks.server.ts
      // NOTE: Might switch back to this in future
      trustedOrigins: ["*"],
    },
    experimental: {
      remoteFunctions: true,
    },
  },
};

export default config;
