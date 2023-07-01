import { createI18nContents } from '../utils/I18nUtils';
import { enContents } from './en';
import { jaContents } from './ja';

type TopResumeContent = {
  title: string;
  description?: string;
  term: string;
  products?: {
    title: string;
    href: string;
  }[];
}[];

export type Contents = {
  'top.about': string;
  'top.resume': TopResumeContent;
};

export const i18nContents = createI18nContents<Contents>({
  ja: jaContents,
  en: enContents,
});
