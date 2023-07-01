import { config } from '../config';
import { I18nLanguage } from '../constants/i18n';
import { getLangFromUrl } from './I18nUtils';

const BASE_URL = config.get('VITE_BASE_URL');

describe('utils/I18nUtils', () => {
  test.each<[string, I18nLanguage]>([
    // valid
    ['/ja', I18nLanguage.Ja],
    ['/en', I18nLanguage.En],
    ['/en/foo', I18nLanguage.En],

    // invalid
    ['/', I18nLanguage.Ja],
    ['/fr', I18nLanguage.Ja],
    ['/english', I18nLanguage.Ja],
  ])('getLangFromUrl', (path, expected) => {
    const url = new URL(`${BASE_URL}${path}`);
    expect(getLangFromUrl(url)).toEqual(expected);
  });
});
