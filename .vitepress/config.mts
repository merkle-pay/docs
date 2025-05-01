import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Merkle Pay",
  description:
    "Easily accept global crypto payments (USDC/USDT) on Solana, Base & Polygon with Merkle Pay. The non-custodial solution for creators, indie hackers & small businesses.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/logo.png",
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/merkle-pay/merkle-pay" },
      { icon: "twitter", link: "https://x.com/merklepay" },
    ],
  },
});
