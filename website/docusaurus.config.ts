import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'World Models & Spatial Intelligence',
  tagline: 'From Representation to Prediction, Planning and Physical Intelligence',
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
    defaultLocale: 'en',
    locales: ['en'],
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
        language: ['en'],
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
          label: 'Start Here',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Tracks',
          position: 'left',
          items: [
            {
              label: '🧑‍🔬 World Model Scientist',
              to: '/docs/scientist/',
            },
            {
              label: '👷 Spatial & Embodied Engineer',
              to: '/docs/spatial/',
            },
          ],
        },
        {
          to: '/roadmap',
          label: 'Roadmap',
          position: 'left',
        },
        {
          to: '/docs/labs',
          label: 'Labs',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Resources',
          position: 'left',
          items: [
            {
              label: 'University Courses',
              to: '/docs/resources/university-courses',
            },
            {
              label: 'Papers',
              to: '/docs/resources/papers',
            },
            {
              label: 'Research Archive',
              to: '/docs/resources/research-archive',
            },
          ],
        },
        {
          href: 'https://github.com/overdued/world-model-spatial-intelligence-course',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Start Here', to: '/docs/start-here/'},
            {label: 'World Model Scientist', to: '/docs/scientist/'},
            {label: 'Spatial & Embodied Engineer', to: '/docs/spatial/'},
            {label: 'Roadmap', to: '/roadmap'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'University Courses', to: '/docs/resources/university-courses'},
            {label: 'Papers', to: '/docs/resources/papers'},
            {label: 'Research Archive', to: '/docs/resources/research-archive'},
            {label: 'Labs', to: '/docs/labs'},
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/overdued/world-model-spatial-intelligence-course',
            },
            {
              label: 'Issues',
              href: 'https://github.com/overdued/world-model-spatial-intelligence-course/issues',
            },
          ],
        },
      ],
      copyright:
        'Course content (docs, roadmaps, slides text) is licensed under CC BY 4.0 · ' +
        'Lab code and notebooks are licensed under MIT · ' +
        'Third-party university course materials are indexed by link only and are not redistributed.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
