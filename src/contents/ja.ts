import type { Contents } from '.';

export const jaContents: Contents = {
  ui: {
    'lang.label': '言語',
    'lang.selected': '選択中',
  },
  'top.about': [
    '渋谷で働く Web フロントエンジニアです．',
    'TypeScript / React を使って開発することが多く，すべてのユーザーに体験に高速でアクセシブルな"最高の Web 体験"を届けることを目指しています．',
  ].join('\n'),
  'top.resume': [
    {
      title: '👨‍💻 株式会社サイバーエージェント',
      description: 'Web フロントエンジニア',
      term: '2019 - 現在',
      products: [
        {
          title: 'WINTICKET',
          href: 'https://www.winticket.jp/',
        },
        {
          title: 'Amebaブログ',
          href: 'https://ameblo.jp/',
        },
      ],
    },
    {
      title: '🎓 同志社大学卒業',
      description: '理工学部情報システムデザイン学科',
      term: '2015 - 2019',
    },
    {
      title: '👨‍💻 ピクスタ株式会社',
      description: 'エンジニアインターン',
      term: '2018 - 2019',
      products: [
        {
          title: 'mecelo (サービス終了)',
          href: 'https://note.com/mecelo/n/neb5734555338',
        },
      ],
    },
    {
      title: '👨‍💻 株式会社CARTA HOLDINGS',
      description: 'インターン (Treasure)',
      term: '2018',
    },
    {
      title: '👨‍💻 株式会社activo',
      description: 'エンジニアインターン(webフロント)',
      term: '2017 - 2018',
      products: [
        {
          title: 'activo',
          href: 'https://activo.jp/',
        },
      ],
    },
    {
      title: '👶 誕生',
      term: '1996/09/02',
    },
  ],
};
