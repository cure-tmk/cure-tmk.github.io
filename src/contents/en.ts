import type { Contents } from '.';

export const enContents: Contents = {
  ui: {
    'lang.label': 'Languages',
    'lang.selected': 'selected',
  },
  'top.about': [
    "Hi, I'm Tomoki, a detail-oriented web frontend developer who believes in the power of clean, performant, and accessible code.",
    "With a strong background in TypeScript and React, I'm dedicated to creating beautiful web experiences that leave a lasting impression.",
    'Please feel free to get in touch!',
  ].join('\n'),
  'top.resume': [
    {
      title: '👨‍💻 mikan Co., Ltd.',
      description: 'Web frontend engineer',
      term: '2024 - present',
      products: [
        {
          title: 'mikan for School',
          href: 'https://forschool.mikan.link/',
        },
      ],
    },
    {
      title: '👨‍💻 CyberAgent, Inc.',
      description: 'Web frontend engineer',
      term: '2019 - 2024',
      products: [
        {
          title: 'WINTICKET',
          href: 'https://www.winticket.jp/',
        },
        {
          title: 'Ameba Blog',
          href: 'https://ameblo.jp/',
        },
      ],
    },
    {
      title: '🎓 Doshisha University',
      description: 'Bachelor of Science and Engineering, Information and Computer Science',
      term: '2015 - 2019',
    },
    {
      title: '👨‍💻 PIXTA Inc.',
      description: 'Internship as full-stack engineer',
      term: '2018 - 2019',
      products: [
        {
          title: 'mecelo (EoS)',
          href: 'https://note.com/mecelo/n/neb5734555338',
        },
      ],
    },
    {
      title: '👨‍💻 CARTA HOLDINGS, INC.',
      description: 'Internship (Treasure)',
      term: '2018',
    },
    {
      title: '👨‍💻 activo Inc.',
      description: 'Internship as web frontend engineer',
      term: '2017 - 2018',
      products: [
        {
          title: 'activo',
          href: 'https://activo.jp/',
        },
      ],
    },
    {
      title: '👶 Born',
      term: '1996/09/02',
    },
  ],
};
