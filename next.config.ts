import type { NextConfig } from "next";

// Velite integration (official pattern): build content alongside next dev/build.
const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  import("velite").then((m) => m.build({ watch: isDev, clean: !isDev }));
}

const nextConfig: NextConfig = {
  experimental: {
    // Route navigations trigger the browser View Transitions API via React's
    // <ViewTransition>. Cross-fade timing/reduced-motion live in globals.css.
    viewTransition: true,
  },
};

export default nextConfig;
