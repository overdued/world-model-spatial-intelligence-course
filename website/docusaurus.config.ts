import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'World Models & Spatial Intelligence',
  // siteConfig strings are not translatable through i18n/ JSON, so the
  // tagline (used for the homepage <meta description>) is chosen per locale.
  tagline:
    process.env.DOCUSAURUS_CURRENT_LOCALE === 'en'
      ? 'From Representation to Prediction, Planning and Physical Intelligence'
      : '从表征到预测、规划与物理智能',
  url: 'https://overdued.github.io',
  baseUrl: '/world-model-spatial-intelligence-course/',
  organizationName: 'overdued',
  projectName: 'world-model-spatial-intelligence-course',
  trailingSlash: false,
  // Escape hatch for local development while content is in flight:
  // `WMSI_BUILD_LENIENT=1 npm run build` downgrades broken links to warnings.
  // CI and production builds must keep the default 'throw'.
  onBrokenLinks: process.env.WMSI_BUILD_LENIENT ? 'warn' : 'throw',
  onBrokenMarkdownLinks: process.env.WMSI_BUILD_LENIENT ? 'warn' : 'throw',
  onBrokenAnchors: process.env.WMSI_BUILD_LENIENT ? 'warn' : 'throw',
  favicon: undefined,

  markdown: {
    mermaid: true,
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
      },
      en: {
        label: 'English',
        htmlLang: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          // Keep numeric filename prefixes in the URL slug: the module slug
          // contract is "01-what-is-a-world-model", and src/data/tracks.js,
          // roadmap links and cross-module links all rely on it.
          numberPrefixParser: false,
          editUrl:
            'https://github.com/overdued/world-model-spatial-intelligence-course/edit/main/website/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        docsRouteBasePath: '/docs',
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        language: ['en', 'zh'],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
      options: {
        securityLevel: 'loose',
        flowchart: {curve: 'basis', htmlLabels: true},
      },
    },
    navbar: {
      title: 'WM & SI',
      items: [
        {
          to: '/docs/start-here/',
          label: '从这里开始',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: '学习路线',
          position: 'left',
          items: [
            {
              label: '🧑‍🔬 世界模型科学家',
              to: '/docs/scientist/',
            },
            {
              label: '👷 空间与具身工程师',
              to: '/docs/spatial/',
            },
          ],
        },
        {
          to: '/roadmap',
          label: '路线图',
          position: 'left',
        },
        {
          to: '/docs/labs',
          label: '实验',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: '资源',
          position: 'left',
          items: [
            {
              label: '大学课程',
              to: '/docs/resources/university-courses',
            },
            {
              label: '论文',
              to: '/docs/resources/papers',
            },
            {
              label: '研究资料库',
              to: '/docs/resources/research-archive',
            },
          ],
        },
        {
          href: 'https://github.com/overdued/world-model-spatial-intelligence-course',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            {label: '从这里开始', to: '/docs/start-here/'},
            {label: '世界模型科学家', to: '/docs/scientist/'},
            {label: '空间与具身工程师', to: '/docs/spatial/'},
            {label: '路线图', to: '/roadmap'},
          ],
        },
        {
          title: '资源',
          items: [
            {label: '大学课程', to: '/docs/resources/university-courses'},
            {label: '论文', to: '/docs/resources/papers'},
            {label: '研究资料库', to: '/docs/resources/research-archive'},
            {label: '实验', to: '/docs/labs'},
          ],
        },
        {
          title: '项目',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/overdued/world-model-spatial-intelligence-course',
            },
            {
              label: '问题反馈',
              href: 'https://github.com/overdued/world-model-spatial-intelligence-course/issues',
            },
            {
              label: '港中大（深圳）',
              href: 'https://www.cuhk.edu.cn/',
            },
          ],
        },
      ],
      copyright:
        'Copyright © 2026 港中大（深圳）人工智能学院 BL&SP 课题组 · 文档 CC BY 4.0 · 代码 MIT',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
