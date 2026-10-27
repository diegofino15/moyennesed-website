import { serve } from "bun";

import index from "./index.html";
import support from "./support/support.html"
import privacy_policy from "./privacy-policy/privacy_policy.html"
import privacy_policy_no_ads from "./privacy-policy-no-ads/privacy_policy_no_ads.html"


const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/support": support, "/support.html": support,
    "/privacy-policy": privacy_policy, "/privacy-policy.html": privacy_policy,
    "/privacy-policy-no-ads": privacy_policy_no_ads, "/privacy-policy-no-ads.html": privacy_policy_no_ads,

    "/robots.txt": new Response(Bun.file("./public/robots.txt")),
    "/app-ads.txt": new Response(Bun.file("./public/app-ads.txt")),
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
