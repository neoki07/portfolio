export const languages = {
  en: 'EN',
  ja: 'JA',
};

export const defaultLang = 'en';

type Translates = {
  intro: {
    greeting: string;
    paragraphs: string[];
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
      paragraphs: [
        `I am {myname}, a web developer.
I specialize in front-end development with React, and engage in back-end development using Laravel for work.`,
        `I am currently interested in coding techniques that facilitate easy addition and modification of functionalities.
Consequently, I strive to learn about architectures and design patterns, gradually incorporating them into my own development.`,
        `In addition, I have a strong interest in personal development, specifically in enhancing my web development skills, and I engage in OSS activities.
In my personal development, I devote myself to improving my web development skills and pursuing developments related to my passion for music.
In the realm of web development, I leverage modern programming languages and frameworks, incorporating best practices such as architecture and design patterns, to create flexible and robust code.
In the field of music-related development, my focus revolves around enabling music enjoyment on the web,
including the development of a synthesizer library utilizing SoundFont2 as the sound source and the creation of web applications that utilize AI for generating piano compositions.`
      ],
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
            "Vercel",
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
            "Orval",
            "Go",
            "Fiber",
            "sqlc",
            "Swagger",
            "Vercel",
            "Render",
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
            "Recital (my library)",
            "Vercel",
            "Cloud Run",
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
      paragraphs: [
        `Web開発者の{myname}です。
Reactを使用したフロントエンド開発を得意としており、仕事ではLaravelを使ったバックエンド開発にも携わっています。`,
        `最近は、機能の追加や修正を容易に行えるコーディング手法に関心があります。
そのため、アーキテクチャやデザインパターンを学習し、自身の開発に少しずつ取り入れることに努めています。`,
        `また、個人開発やOSS活動にも興味を持っており、日々積極的に取り組んでいます。
個人開発では、Web開発のスキル向上と私自身の趣味である音楽に関連した開発に力を注いでいます。
Web開発においては、モダンなプログラミング言語やフレームワークを活用しながら、アーキテクチャやデザインパターンなどのベストプラクティスを取り入れ、柔軟性と堅牢性のあるコードを作成することを大切にしています。
音楽に関連した開発では、Web上で音楽を楽しむことをテーマに、SoundFont2を音源とするシンセサイザーライブラリや、ピアノ曲を自動生成するAIを活用したWebサイトの開発などに取り組んでいます。`,
      ],
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
            "Vercel",
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
            "Orval",
            "Go",
            "Fiber",
            "sqlc",
            "Swagger",
            "Vercel",
            "Render",
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
            "Recital (my library)",
            "Vercel",
            "Cloud Run",
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