// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "中山学院网络维护科",
  tagline: "开发组",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://developer.zsxyww.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ZSCNetSupportDept", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  deploymentBranch: "build",
  githubHost: "github.com",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  //staticDirectories: ['static'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ZSCNetSupportDept/website/tree/master",
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ZSCNetSupportDept/website/tree/master",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  //When using TypeScript ,there may return an error!
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        language: ["en", "zh"],

        searchResultLimits: 10,

        highlightSearchTermsOnTargetPage: true,
      }),
    ],
    "@docusaurus/theme-mermaid",
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //mermaid: {},  // 这里可以先尝试空对象，避免不兼容
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "ZSCNetworkSupport",
        logo: {
          alt: "ZSCNetworkSupport_logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/", label: "首页", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "wiki",
            position: "left",
            label: "wiki",
          },
          {
            type: "docSidebar",
            sidebarId: "devdocs",
            position: "left",
            label: "开发组文档",
          },
          { to: "/blog", label: "文章", position: "left" },
          {
            href: "https://github.com/ZSCNetSupportDept/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} ZSCNetworkSupport,Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      headTags: [
        {
          tagName: "link",
          attributes: {
            rel: "icon",
            href: "/img/docusaurus.png",
          },
        },
      ],
      // see https://www.docusaurus.cn/docs/api/docusaurus-config#headTags

      mermaid: {
        theme: { light: "default", dark: "default" },
        options: {
          darkMode: true,
          background: "#ffffff",
        },
      },
    }),
  markdown: {
    mermaid: true,
  },

  // //docusaurus-lunr-search
  // plugins: [
  //   [
  //     require.resolve("docusaurus-lunr-search"),
  //     {
  //       languages: ["en", "zh"],
  //       highlightResult: true,
  //       maxHits: 25,
  //     },
  //   ],
  // ],
};

export default config;
