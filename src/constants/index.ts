import { I18nLanguage } from './i18n';

export const constants = {
  site: {
    title: 'cure-tmk',
    description: 'cure-tmk',
    defaultLanguage: I18nLanguage.Ja,
    languages: [I18nLanguage.Ja, I18nLanguage.En],
  },
  social: {
    twitter: 'cure_tmk',
    github: 'cure-tmk',
    bluesky: 'cure-tmk',
    instagram: 'cure_tmk',
  },
} as const;
