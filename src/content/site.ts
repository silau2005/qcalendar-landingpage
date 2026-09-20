export const site = {
  name: 'Q Calendar',
  companyUrl: 'https://regnum.io',
  stores: {
    ios: 'https://apps.apple.com/hk/app/q-calendar/id6483364607',
    android:
      'https://play.google.com/store/apps/details?id=io.regnum.q_calendar',
  },
};

export const languages = [
  { locale: 'zh', label: '繁體中文', tag: 'zh-Hant', path: '/' },
  { locale: 'en', label: 'English', tag: 'en', path: '/en/' },
  { locale: 'ja', label: '日本語', tag: 'ja', path: '/ja/' },
] as const;

export type Locale = (typeof languages)[number]['locale'];

interface Copy {
  name: string;
  tagline: string;
  description: string;
  eyebrow: string;
  available: string;
  preview: string;
  previewDescription: string;
  features: string;
  featureItems: { title: string; description: string; symbol: string }[];
  closing: string;
  closingDescription: string;
  about: string;
  privacy: string;
  terms: string;
  skip: string;
  theme: string;
  themes: { system: string; light: string; dark: string };
  screenshot: string;
}

export const content: Record<Locale, Copy> = {
  zh: {
    name: 'Q 行事曆',
    tagline: '讓每一天，多一點可愛。',
    description:
      '用可愛貼紙裝飾日程，用喜歡的色彩安排生活。Q 行事曆，讓計劃變得有趣。',
    eyebrow: '你的日常，你的風格',
    available: '適用於 iPhone 與 Android',
    preview: '看看你的新日常',
    previewDescription: '熟悉的行事曆，加上一點屬於你的個性。',
    features: '生活大小事，都值得用心安排。',
    featureItems: [
      {
        title: '貼上好心情',
        description: '拖放可愛貼紙，為平凡的日子添上小小驚喜。',
        symbol: '✿',
      },
      {
        title: '日程一目了然',
        description: '建立活動、設定提醒，輕鬆安排工作與生活。',
        symbol: '▦',
      },
      {
        title: '換上你的色彩',
        description: '選擇喜歡的色彩與主題，打造自己的行事曆。',
        symbol: '◒',
      },
    ],
    closing: '下一個好日子，從這裡開始。',
    closingDescription: '把計劃、生活，還有一點可愛，放在一起。',
    about: '關於我們',
    privacy: '隱私政策',
    terms: '使用條款',
    skip: '跳至主要內容',
    theme: '外觀',
    themes: { system: '跟隨系統', light: '淺色', dark: '深色' },
    screenshot: 'Q 行事曆預覽',
  },
  en: {
    name: 'Q Calendar',
    tagline: 'A little more joy in every day.',
    description:
      'Make plans, decorate with cute stickers, and find your favorite colors. A calendar that feels a little more like you.',
    eyebrow: 'YOUR DAYS, YOUR WAY',
    available: 'For iPhone and Android',
    preview: 'Meet your new everyday',
    previewDescription: 'A familiar calendar. A little extra personality.',
    features: 'For the big plans. And the little things.',
    featureItems: [
      {
        title: 'Stick on a little joy',
        description:
          'Drag and drop cute stickers to make ordinary days feel special.',
        symbol: '✿',
      },
      {
        title: 'Make room for life',
        description:
          'Create events, set reminders, and keep work and everyday plans in view.',
        symbol: '▦',
      },
      {
        title: 'Find your colors',
        description:
          'Choose your favorite colors and themes for a calendar that feels like yours.',
        symbol: '◒',
      },
    ],
    closing: 'Your next good day starts here.',
    closingDescription: 'A little planning. A little personality. All you.',
    about: 'About',
    privacy: 'Privacy',
    terms: 'Terms',
    skip: 'Skip to content',
    theme: 'Appearance',
    themes: { system: 'System', light: 'Light', dark: 'Dark' },
    screenshot: 'Q Calendar preview',
  },
  ja: {
    name: 'Q カレンダー',
    tagline: '毎日に、ちょっとした楽しさを。',
    description:
      '可愛いステッカーと好きな色で、予定をあなたらしく。毎日の計画が楽しくなるカレンダー。',
    eyebrow: 'あなたの毎日を、あなたらしく',
    available: 'iPhone・Android 対応',
    preview: '新しい毎日をのぞいてみよう',
    previewDescription: 'いつものカレンダーに、あなたらしさをプラス。',
    features: '大きな予定も、小さな楽しみも。',
    featureItems: [
      {
        title: '楽しさをペタッと',
        description:
          '可愛いステッカーをドラッグ＆ドロップして、いつもの日に彩りを。',
        symbol: '✿',
      },
      {
        title: '予定をすっきり',
        description: 'イベントやリマインダーで、仕事も暮らしも見やすく整理。',
        symbol: '▦',
      },
      {
        title: '好きな色で',
        description: 'お気に入りの色やテーマを選んで、自分だけのカレンダーに。',
        symbol: '◒',
      },
    ],
    closing: '次の素敵な一日は、ここから。',
    closingDescription: '予定も、暮らしも、ちょっとした可愛さも。',
    about: '私たちについて',
    privacy: 'プライバシー',
    terms: '利用規約',
    skip: '本文へ移動',
    theme: '外観',
    themes: { system: 'システム', light: 'ライト', dark: 'ダーク' },
    screenshot: 'Q カレンダーのプレビュー',
  },
};
