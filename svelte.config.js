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
      trustedOrigins: ["https://gdgoc-adtu.deno.dev"],
    },
    experimental: {
      remoteFunctions: true,
    },
  },
};

export default config;
