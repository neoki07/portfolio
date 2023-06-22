export const languages = {
  en: 'EN',
  ja: 'JA',
};

export const defaultLang = 'en';

export type ProjectCategory = 'Websites' | 'JavaScript Libraries' | 'CLI Tools';

type Translates = {
  intro: {
    greeting: string;
    paragraphs: string[];
  };
  skills: {
    title: string;
    languagesLabel: string;
    frameworksLabel: string;
    librariesLabel: string;
    languages: string[];
    frameworksAndLibraries: string[];
    mostUsedLanguagesLabel: string;
  };
  projects: {
    title: string;
    projects: Array<{
      name: string;
      repoUrl: string;
      demoUrl?: string;
      description: string;
      technologies: string[];
      category: ProjectCategory;
    }>;
  };
  ossContributions: {
    title: string;
  };
};

type AllLangTranslates = {
  [K in keyof typeof languages]: Translates;
};

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
including the development of a synthesizer library utilizing SoundFont2 as the sound source and the creation of web applications that utilize AI for generating piano compositions.`,
      ],
    },
    skills: {
      title: 'Skills',
      languagesLabel: 'Languages',
      frameworksLabel: 'Frameworks',
      librariesLabel: 'Libraries',
      languages: [
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Go',
        'Rust',
        'Python',
        'PHP',
      ],
      frameworksAndLibraries: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'Tanstack Query',
        'Storybook',
        'Swagger',
        'Astro',
        'Redux',
        'Jest',
        'Docker',
        'Laravel',
        'Ansible',
      ],
      mostUsedLanguagesLabel: 'Most Used Languages',
    },
    projects: {
      title: 'Projects',
      projects: [
        {
          name: '[WIP] Myposts',
          repoUrl: 'https://github.com/ot07/myposts',
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
          category: 'Websites',
        },
        {
          name: '[WIP] Next Bazaar',
          repoUrl: 'https://github.com/ot07/next-bazaar',
          demoUrl: 'https://next-bazaar.vercel.app',
          description:
            'An online shopping website for buying and selling products',
          technologies: [
            'TypeScript',
            'React',
            'Next.js',
            'Tanstack Query',
            'Mantine',
            'React Hook Form',
            'Zod',
            'Orval',
            'Go',
            'Fiber',
            'sqlc',
            'Swagger',
            'Vercel',
            'Render',
          ],
          category: 'Websites',
        },
        {
          name: 'Music Transformer Playground',
          repoUrl: 'https://github.com/ot07/music-transformer-playground',
          demoUrl: 'https://music-transformer-playground.vercel.app',
          description:
            'A playground to generate piano performances easily using AI called Music Transformer',
          technologies: [
            'TypeScript',
            'React',
            'Vite',
            'Tanstack Query',
            'Python',
            'FastAPI',
            'Music Transformer',
            'Recital (my library)',
            'Vercel',
            'Cloud Run',
          ],
          category: 'Websites',
        },
        {
          name: 'Recital',
          repoUrl: 'https://github.com/resonance-box/recital',
          description: `A musical tools for the browser`,
          technologies: [
            'TypeScript',
            'React',
            'Vite',
            'Zustand',
            'Immer',
            'sf2-synth-audio-worklet (my library)',
          ],
          category: 'JavaScript Libraries',
        },
        {
          name: 'sf2-synth-audio-worklet',
          repoUrl: 'https://github.com/resonance-box/sf2-synth-audio-worklet',
          description: `An Audio Worklet-based SoundFont2 synthesizer`,
          technologies: [
            'TypeScript',
            'Vite',
            'Rollup',
            'Audio Worklet',
            'Rust',
            'WebAssembly',
            'SoundFont2',
          ],
          category: 'JavaScript Libraries',
        },
      ],
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
      languagesLabel: '言語',
      frameworksLabel: 'フレームワーク',
      librariesLabel: 'ライブラリ',
      languages: [
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Go',
        'Rust',
        'Python',
        'PHP',
      ],
      frameworksAndLibraries: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'Tanstack Query',
        'Storybook',
        'Swagger',
        'Astro',
        'Redux',
        'Jest',
        'Docker',
        'Laravel',
        'Ansible',
      ],
      mostUsedLanguagesLabel: 'よく使用している言語',
    },
    projects: {
      title: 'プロジェクト',
      projects: [
        {
          name: '[WIP] Myposts',
          repoUrl: 'https://github.com/ot07/myposts',
          demoUrl: 'https://myposts-dev.vercel.app',
          description:
            'Markdown形式の記事を閲覧・共有することができるプラットフォーム',
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
          category: 'Websites',
        },
        {
          name: '[WIP] Next Bazaar',
          repoUrl: 'https://github.com/ot07/next-bazaar',
          demoUrl: 'https://next-bazaar.vercel.app',
          description: '商品の売買ができるオンラインショッピングサイト',
          technologies: [
            'TypeScript',
            'React',
            'Next.js',
            'Tanstack Query',
            'Mantine',
            'React Hook Form',
            'Zod',
            'Orval',
            'Go',
            'Fiber',
            'sqlc',
            'Swagger',
            'Vercel',
            'Render',
          ],
          category: 'Websites',
        },
        {
          name: 'Music Transformer Playground',
          repoUrl: 'https://github.com/ot07/music-transformer-playground',
          demoUrl: 'https://music-transformer-playground.vercel.app',
          description:
            'Music Transformerと呼ばれるAIを使って、簡単にピアノの演奏を生成することができるプレイグラウンド',
          technologies: [
            'TypeScript',
            'React',
            'Vite',
            'Tanstack Query',
            'Python',
            'FastAPI',
            'Music Transformer',
            'Recital (my library)',
            'Vercel',
            'Cloud Run',
          ],
          category: 'Websites',
        },
        {
          name: 'Recital',
          repoUrl: 'https://github.com/resonance-box/recital',
          description: `ブラウザ向けの音楽ツール`,
          technologies: [
            'TypeScript',
            'React',
            'Vite',
            'Zustand',
            'Immer',
            'sf2-synth-audio-worklet (my library)',
          ],
          category: 'JavaScript Libraries',
        },
        {
          name: 'sf2-synth-audio-worklet',
          repoUrl: 'https://github.com/resonance-box/sf2-synth-audio-worklet',
          description: `Audio Workletを利用したSoundFont2シンセサイザー`,
          technologies: [
            'TypeScript',
            'Vite',
            'Rollup',
            'Audio Worklet',
            'Rust',
            'WebAssembly',
            'SoundFont2',
          ],
          category: 'JavaScript Libraries',
        },
      ],
    },
    ossContributions: {
      title: 'OSS活動',
    },
  },
};
