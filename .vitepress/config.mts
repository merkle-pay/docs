import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: "English",
      lang: "en-US",
    },
    "zh-Hans": {
      label: "简体中文",
      lang: "zh-Hans",
      link: "/zh-Hans",
      title: "Merkle Pay",
      description:
        "Merkle Pay是完全开源的加密货币收款解决方案，支持Solana、Base和Polygon等区块链网络，专为独立开发者、内容创作者和中小企业打造",
    },
    "zh-Hant": {
      label: "繁體中文",
      lang: "zh-Hant",
      link: "/zh-Hant",
      title: "Merkle Pay",
      description:
        "Merkle Pay 是完全開源的加密貨幣收款解決方案，支持 Solana、Base 和 Polygon 等區塊鏈網絡，專為獨立開發者、內容創作者和中小企業打造",
    },
  },
  title: "Merkle Pay",
  description:
    "Easily accept global crypto payments (USDC/USDT) on Solana, Base & Polygon with Merkle Pay. The non-custodial solution for creators, indie hackers & small businesses.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: true,
    logo: "/images/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Website", link: "https://www.merklepay.com" },
    ],
    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
          { text: "Contact us", link: "/contact-us" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/merkle-pay/merkle-pay" },
      { icon: "twitter", link: "https://x.com/merklepay" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Merkle Pay",
    },
  },
});
