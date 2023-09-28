import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import solid from '@astrojs/solid-js';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://uhq-blog.vercel.app/", // replace this with your deployed domain
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react({
      include: ['**/react/*'],
    }),
    sitemap(),
    solid({
      include: ['**/solid/*'],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where"
});
