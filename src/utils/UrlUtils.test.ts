import { config } from '../config';
import { I18nLanguage } from '../constants/i18n';
import { asset, getLangUrl, getUrlLang, pathToUrl } from './UrlUtils';

const BASE_URL = config.get('VITE_BASE_URL');

describe('utils/UrlUtils', () => {
  test.each<[string, Record<string, any> | undefined, string]>([
    ['image.jpg', undefined, '/assets/image.jpg'],
    ['/image.jpg', undefined, '/assets/image.jpg'],
    ['dir/image.jpg', undefined, '/assets/dir/image.jpg'],
    ['/dir/image.jpg', undefined, '/assets/dir/image.jpg'],
    ['image.jpg', { absolute: false }, '/assets/image.jpg'],
    ['image.jpg', { absolute: true }, `${BASE_URL}/assets/image.jpg`],
  ])('asset(%s, %s) = %s', (path, options, expected) => {
    expect(asset(path, options)).toEqual(expected);
  });

  test.each<[string, string]>([
    ['/foo', `${BASE_URL}/foo`],
    ['foo/', `${BASE_URL}/foo/`],
  ])('pathToUrl(%s, %s) = %s', (path, expected) => {
    expect(pathToUrl(path)).toEqual(expected);
  });

  test.each<[string, I18nLanguage]>([
    // valid
    ['/ja', I18nLanguage.Ja],
    ['/en', I18nLanguage.En],
    ['/en/foo', I18nLanguage.En],

    // invalid
    ['/', I18nLanguage.Ja],
    ['/fr', I18nLanguage.Ja],
    ['/english', I18nLanguage.Ja],
  ])('getUrlLang(%s) = %s', (path, expected) => {
    const url = new URL(`${BASE_URL}${path}`);
    expect(getUrlLang(url)).toEqual(expected);
  });

  test.each<[string, I18nLanguage, string]>([
    // unchanged
    ['/ja', I18nLanguage.Ja, '/ja'],
    ['/en', I18nLanguage.En, '/en'],
    ['/en/foo', I18nLanguage.En, '/en/foo'],

    // changed
    ['/ja', I18nLanguage.En, '/en'],
    ['/en', I18nLanguage.Ja, '/ja'],
    ['/en/foo', I18nLanguage.Ja, '/ja/foo'],
    ['/ja/ja', I18nLanguage.En, '/en/ja'],

    // unchanged (invalid)
    ['/', I18nLanguage.Ja, '/'],
    ['/fr', I18nLanguage.Ja, '/fr'],
    ['/english', I18nLanguage.Ja, '/english'],
  ])('getLangUrl(%s, %s) = %s', (path, lang, expectedPath) => {
    const url = new URL(`${BASE_URL}${path}`);
    const expectedUrl = new URL(`${BASE_URL}${expectedPath}`);
    expect(getLangUrl(url, lang)).toEqual(expectedUrl);
  });
});
