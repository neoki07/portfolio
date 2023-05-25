export const languages = {
  en: 'EN',
  ja: 'JA',
};

export const defaultLang = 'en';

type Translates = {
  intro: {
    greeting: string;
    paragraph: string;
  },
  skills: {
    title: string;
    languages: string;
    frameworks: string;
    libraries: string;
    mostUsedLanguages: string;
  },
  projects: {
    title: string;
    projects: Array<{
      name: string;
      repoUrl: string;
      demoUrl?: string;
      description: string;
      technologies: string[];
    }>;
  },
  ossContributions: {
    title: string;
  },
};

type AllLangTranslates = {
  [K in keyof typeof languages]: Translates;
}

export const allLangTranslates: AllLangTranslates = {
  en: {
    intro: {
      greeting: 'Hi there',
      paragraph: `I am {myname}, a web developer.
I specialize in front-end development with React, and engage in back-end development using Laravel for work.`,
    },
    skills: {
      title: 'Skills',
      languages: 'Languages',
      frameworks: 'Frameworks',
      libraries: 'Libraries',
      mostUsedLanguages: 'Most Used Languages',
    },
    projects: {
      title: 'Projects',
      projects: [
        {
          name: "[WIP] Myposts",
          repoUrl: "https://github.com/ot07/myposts",
          demoUrl: "https://myposts-hazel.vercel.app",
          description: `This website is a platform dedicated to sharing posts in Markdown format.
Users can explore posts created by others without the need for logging in.
Additionally, users have the option to log in using their GitHub accounts and create their own posts on the site.`,
          technologies: [
            "TypeScript",
            "React",
            "Next.js",
            "tRPC",
            "Tailwind CSS",
            "Prisma",
            "React Hook Form",
            "Zod",
            "Markdoc",
          ],
        },
        {
          name: "[WIP] Next Bazaar",
          repoUrl: "https://github.com/ot07/next-bazaar",
          demoUrl: "https://next-bazaar.vercel.app",
          description: `This website is a user-friendly online bazaar website where users can buy and sell products.
On this platform, users can easily register their own products for sale, and can browse through a wide range of product categories.`,
          technologies: [
            "TypeScript",
            "React",
            "Next.js",
            "Tanstack Query",
            "Mantine",
            "React Hook Form",
            "Zod",
            "orval",
            "Go",
            "Fiber",
            "sqlc",
            "Swagger",
          ],
        },
        {
          name: "Music Transformer Playground",
          repoUrl: "https://github.com/ot07/music-transformer-playground",
          demoUrl: "https://music-transformer-playground.vercel.app",
          description: `This website is a playground where you can easily generate piano performances using an AI called Music Transformer.`,
          technologies: [
            "TypeScript",
            "React",
            "Vite",
            "Tanstack Query",
            "Python",
            "FastAPI",
            "Music Transformer",
            "recital (my library)",
          ],
        },
        {
          name: "Recital",
          repoUrl: "https://github.com/resonance-box/recital",
          description: `A musical tools for the browser.`,
          technologies: [
            "TypeScript",
            "React",
            "Vite",
            "Zustand",
            "Immer",
            "sf2-synth-audio-worklet (my library)",
          ],
        },
        {
          name: "sf2-synth-audio-worklet",
          repoUrl: "https://github.com/resonance-box/sf2-synth-audio-worklet",
          description: `An Audio Worklet-based SoundFont2 synthesizer.`,
          technologies: [
            "TypeScript",
            "Vite",
            "Rollup",
            "Audio Worklet",
            "Rust",
            "WebAssembly",
            "SoundFont2",
          ],
        }
      ]
    },
    ossContributions: {
      title: 'OSS Contributions',
    },
  },
  ja: {
    intro: {
      greeting: 'こんにちは',
      paragraph: `Web開発者の{myname}です。
Reactを使用したフロントエンド開発を得意としており、仕事ではLaravelを使ったバックエンド開発にも携わっています。`
    },
    skills: {
      title: 'スキル',
      languages: '言語',
      frameworks: 'フレームワーク',
      libraries: 'ライブラリ',
      mostUsedLanguages: 'よく使用している言語',
    },
    projects: {
      title: 'プロジェクト',
      projects: [
        {
          name: "[WIP] Myposts",
          repoUrl: "https://github.com/ot07/myposts",
          demoUrl: "https://myposts-hazel.vercel.app",
          description: `このWebサイトは、Markdown形式の記事を共有するためのプラットフォームです。
ユーザーはログインする必要なく、他のユーザーが作成した記事を閲覧することができます。
さらに、ユーザーはGitHubアカウントを使用してログインし、サイト上に記事を作成することもできます。`,
          technologies: [
            "TypeScript",
            "React",
            "Next.js",
            "tRPC",
            "Tailwind CSS",
            "Prisma",
            "React Hook Form",
            "Zod",
            "Markdoc",
          ],
        },
        {
          name: "[WIP] Next Bazaar",
          repoUrl: "https://github.com/ot07/next-bazaar",
          demoUrl: "https://next-bazaar.vercel.app",
          description: `このWebサイトは、ユーザーフレンドリーなオンラインのショッピングサイトで、ユーザーは商品の売買ができます。
このプラットフォームでは、ユーザーは簡単に自分の商品を登録することができますし、さまざまな商品カテゴリーを閲覧することもできます。`,
          technologies: [
            "TypeScript",
            "React",
            "Next.js",
            "Tanstack Query",
            "Mantine",
            "React Hook Form",
            "Zod",
            "orval",
            "Go",
            "Fiber",
            "sqlc",
            "Swagger",
          ],
        },
        {
          name: "Music Transformer Playground",
          repoUrl: "https://github.com/ot07/music-transformer-playground",
          demoUrl: "https://music-transformer-playground.vercel.app",
          description: `このWebサイトは、Music Transformerと呼ばれるAIを使って、簡単にピアノの演奏を生成することができるプレイグラウンドです。`,
          technologies: [
            "TypeScript",
            "React",
            "Vite",
            "Tanstack Query",
            "Python",
            "FastAPI",
            "Music Transformer",
            "recital (my library)",
          ],
        },
        {
          name: "Recital",
          repoUrl: "https://github.com/resonance-box/recital",
          description: `ブラウザ向けの音楽ツールです。`,
          technologies: [
            "TypeScript",
            "React",
            "Vite",
            "Zustand",
            "Immer",
            "sf2-synth-audio-worklet (my library)",
          ],
        },
        {
          name: "sf2-synth-audio-worklet",
          repoUrl: "https://github.com/resonance-box/sf2-synth-audio-worklet",
          description: `Audio Workletを利用したSoundFont2シンセサイザーです。`,
          technologies: [
            "TypeScript",
            "Vite",
            "Rollup",
            "Audio Worklet",
            "Rust",
            "WebAssembly",
            "SoundFont2",
          ],
        }
      ]
    },
    ossContributions: {
      title: 'OSS活動',
    },
  },
};
