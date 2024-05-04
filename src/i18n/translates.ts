import merge from 'lodash/merge'
import { GITHUB_USERNAME } from '../constants/me'

export const languages = {
  en: 'EN',
  ja: 'JA',
}

export const defaultLang = 'en'

export type ProjectCategory =
  | 'Websites'
  | 'Websites for Studying'
  | 'npm Packages'
  | 'Prettier Plugins'
  | 'CLI Tools'

type Translates = {
  intro: {
    greeting: string
    paragraphs: string[]
  }
  skills: {
    title: string
    mostUsedLanguagesLabel: string
    frameworksLabel: string
    librariesLabel: string
    frameworksAndLibraries: string[]
  }
  projects: {
    title: string
    projects: Record<
      string,
      {
        name: string
        repoUrl: string
        demoUrl?: string
        packageUrl?: string
        description: string
        technologies: string[]
        category: ProjectCategory
      }
    >
  }
  ossContributions: {
    title: string
    contributions: Array<{
      pullRequest: {
        title: string
        url: string
      }
      project: string
    }>
    others: {
      title: string
      groups: Array<{
        title: string
        pullRequests: Array<{
          title: string
          url: string
        }>
      }>
    }
  }
}

type AllLangTranslates = {
  [K in keyof typeof languages]: Translates
}

const enTranslates: Translates = {
  intro: {
    greeting: 'Hi there',
    paragraphs: [
      `I am {myname}, a web developer.
I specialize in front-end development, and professionally, I am involved in full-stack development for corporate SaaS products.
I also work on personal web development projects aimed at honing my skills, as well as pursuing my passion for music. Furthermore, I contribute to OSS projects, all of which I enjoy doing on a daily basis.`,
    ],
  },
  skills: {
    title: 'Skills',
    mostUsedLanguagesLabel: 'Most Used Languages',
    frameworksLabel: 'Frameworks',
    librariesLabel: 'Libraries',
    frameworksAndLibraries: [
      'React',
      'Next.js',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'Redux',
      'Storybook',
      'Swagger',
      'Jest',
      'Vitest',
      'Playwright',
      'Mock Service Worker',
      'Biome',
      'ESLint',
      'Prettier',
      'Docker',
      'Fiber',
      'Laravel',
      'Ansible',
    ],
  },
  projects: {
    title: 'Projects',
    projects: {
      nextBazaar: {
        name: '[WIP] Next Bazaar',
        repoUrl: `https://github.com/${GITHUB_USERNAME}/next-bazaar`,
        demoUrl: 'https://next-bazaar.vercel.app',
        description:
          'An online shopping website for buying and selling products',
        technologies: [
          'TypeScript',
          'React',
          'Next.js',
          'Jest',
          'Storybook',
          'TanStack Query',
          'React Hook Form',
          'Zod',
          'Mantine',
          'Orval',
          'Go',
          'Fiber',
          'sqlc',
          'Swagger',
          'Vercel',
          'AWS App Runner',
          'Amazon RDS',
        ],
        category: 'Websites for Studying',
      },
      myposts: {
        name: '[WIP] Myposts',
        repoUrl: `https://github.com/${GITHUB_USERNAME}/myposts`,
        demoUrl: 'https://myposts-dev.vercel.app',
        description:
          'A platform where you can view and share posts in Markdown format',
        technologies: [
          'TypeScript',
          'React',
          'Next.js',
          'tRPC',
          'Tailwind CSS',
          'Prisma',
          'React Hook Form',
          'Zod',
          'Markdoc',
          'Vercel',
        ],
        category: 'Websites for Studying',
      },
      musicTransformerPlayground: {
        name: 'Music Transformer Playground',
        repoUrl: `https://github.com/${GITHUB_USERNAME}/music-transformer-playground`,
        demoUrl: 'https://music-transformer-playground.vercel.app',
        description:
          'A playground to generate piano performances easily using AI called Music Transformer',
        technologies: [
          'TypeScript',
          'React',
          'Vite',
          'TanStack Query',
          'Python',
          'FastAPI',
          'Music Transformer',
          'Docker',
          'Vercel',
          'Cloud Run',
          'Recital (my library)',
          'sf2-synth-audio-worklet (my library)',
        ],
        category: 'Websites',
      },
      prettierPluginAstroOrganizeImports: {
        name: 'prettier-plugin-astro-organize-imports',
        repoUrl: `https://github.com/${GITHUB_USERNAME}/prettier-plugin-astro-organize-imports`,
        packageUrl:
          'https://www.npmjs.com/package/prettier-plugin-astro-organize-imports',
        description: 'A Prettier plugin for formatting imports in Astro files',
        technologies: ['TypeScript', 'Prettier', 'Astro', 'esbuild'],
        category: 'Prettier Plugins',
      },
      gitCo: {
        name: 'git-co',
        repoUrl: `https://github.com/${GITHUB_USERNAME}/git-co`,
        packageUrl: 'https://crates.io/crates/git-co',
        description:
          'A CLI tool for branch switching by providing a selection-based checkout process',
        technologies: ['Rust', 'clap', 'skim'],
        category: 'CLI Tools',
      },
      sf2SynthAudioWorklet: {
        name: 'sf2-synth-audio-worklet',
        repoUrl: `https://github.com/${GITHUB_USERNAME}/sf2-synth-audio-worklet`,
        packageUrl: 'https://www.npmjs.com/package/sf2-synth-audio-worklet',
        description: 'An Audio Worklet-based SoundFont2 synthesizer',
        technologies: [
          'TypeScript',
          'Vite',
          'Rollup',
          'Audio Worklet',
          'Rust',
          'WebAssembly',
          'SoundFont2',
        ],
        category: 'npm Packages',
      },
      colorBlindnessDevtool: {
        name: 'Color Blindness DevTool',
        repoUrl: `https://github.com/${GITHUB_USERNAME}/color-blindness-devtool`,
        packageUrl: 'https://www.npmjs.com/package/color-blindness-devtool',
        description:
          'Accessibility tool for simulating color blindness in web application development',
        technologies: ['TypeScript', 'Web Components', 'Lit'],
        category: 'npm Packages',
      },
      recital: {
        name: '[WIP] Recital',
        repoUrl: 'https://github.com/resonance-box/recital',
        packageUrl:
          'https://www.npmjs.com/package/@resonance-box/react-recital',
        description:
          'A musical tools for the browser (Sequencer, Piano-Roll UI, etc.)',
        technologies: [
          'TypeScript',
          'React',
          'Vite',
          'Zustand',
          'Immer',
          'sf2-synth-audio-worklet (my library)',
        ],
        category: 'npm Packages',
      },
    },
  },
  ossContributions: {
    title: 'OSS Contributions',
    contributions: [
      {
        pullRequest: {
          title:
            'TypeScript: Fix issue with double semicolon caused by // prettier-ignore on a call signature line (#14830)',
          url: 'https://github.com/prettier/prettier/pull/14830',
        },
        project: 'Prettier',
      },
      {
        pullRequest: {
          title:
            '[@mantine/core] AppShell: Fix wrong padding when navbarOffsetBreakpoint and asideOffsetBreakpoint have the same value (#4281)',
          url: 'https://github.com/mantinedev/mantine/pull/4281',
        },
        project: 'Mantine',
      },
      {
        pullRequest: {
          title: 'feat(biome_css_analyzer): noUnknownUnit (#2535)',
          url: 'https://github.com/biomejs/biome/pull/2535',
        },
        project: 'Biome',
      },
      {
        pullRequest: {
          title: 'feat(biome_css_analyzer): noUnknownFunction (#2570)',
          url: 'https://github.com/biomejs/biome/pull/2570',
        },
        project: 'Biome',
      },
    ],
    others: {
      title: 'Others',
      groups: [
        {
          title: 'Fix typos',
          pullRequests: [
            {
              title: 'mantinedev/mantine#4290',
              url: 'https://github.com/mantinedev/mantine/pull/4290',
            },
            {
              title: 'withastro/docs#3308',
              url: 'https://github.com/withastro/docs/pull/3308',
            },
            {
              title: 'withastro/docs#3310',
              url: 'https://github.com/withastro/docs/pull/3310',
            },
            {
              title: 'withastro/docs#3321',
              url: 'https://github.com/withastro/docs/pull/3321',
            },
          ],
        },
        {
          title: 'Fix translations',
          pullRequests: [
            {
              title: 'microsoft/vscode-loc#1556',
              url: 'https://github.com/microsoft/vscode-loc/issues/1556',
            },
          ],
        },
      ],
    },
  },
}

const jaTranslates: Translates = merge({}, enTranslates, {
  intro: {
    greeting: 'こんにちは',
    paragraphs: [
      `Web開発者の{myname}です。
フロントエンド開発を得意としており、仕事では企業向けSaaSプロダクトのフルスタック開発に携わっています。
他にも、Web開発のスキル向上や趣味である音楽をテーマとした個人開発、OSSプロジェクトへのコントリビュートなども行っており、日々楽しみながら活動しています。`,
    ],
  },
  skills: {
    title: 'スキル',
    mostUsedLanguagesLabel: 'よく使用している言語',
    frameworksLabel: 'フレームワーク',
    librariesLabel: 'ライブラリ',
  },
  projects: {
    title: 'プロジェクト',
    projects: {
      nextBazaar: {
        description: '商品の売買ができるオンラインショッピングサイト',
      },
      myposts: {
        description:
          'Markdown形式の記事を閲覧・共有することができるプラットフォーム',
      },
      musicTransformerPlayground: {
        description:
          'Music Transformerと呼ばれるAIを使って、簡単にピアノの演奏を生成することができるプレイグラウンド',
      },
      sf2SynthAudioWorklet: {
        description: 'Audio Workletを利用したSoundFont2シンセサイザー',
      },
      colorBlindnessDevtool: {
        description:
          'Webアプリケーション開発における色覚異常をシミュレートするアクセシビリティツール',
      },
      prettierPluginAstroOrganizeImports: {
        description: 'Astroファイルのimport文を整形するPrettierプラグイン',
      },
      gitCo: {
        description: '選択形式でブランチを切り替える処理を提供するCLIツール',
      },
      recital: {
        description:
          'ブラウザ向けの音楽ツール（シーケンサーやピアノロールUIなど）',
      },
    },
  },
  ossContributions: {
    title: 'OSSコントリビューション',
    others: {
      title: 'その他',
      groups: [
        {
          title: 'タイポ修正',
        },
      ],
    },
  },
})

export const allLangTranslates: AllLangTranslates = {
  en: enTranslates,
  ja: jaTranslates,
}
