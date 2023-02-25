import { config } from '../config';
import { asset, pathToUrl } from './UrlUtils';

describe('utils/UrlUtils', () => {
  test.each<[string, Record<string, any> | undefined, string]>([
    ['image.jpg', undefined, '/assets/image.jpg'],
    ['/image.jpg', undefined, '/assets/image.jpg'],
    ['dir/image.jpg', undefined, '/assets/dir/image.jpg'],
    ['/dir/image.jpg', undefined, '/assets/dir/image.jpg'],
    ['image.jpg', { absolute: false }, '/assets/image.jpg'],
    ['image.jpg', { absolute: true }, `${config.get('VITE_BASE_URL')}/assets/image.jpg`],
  ])('asset(%p, %p) = %p', (path, options, expected) => {
    expect(asset(path, options)).toEqual(expected);
  });

  test.each<[string, string]>([
    ['/foo', `${config.get('VITE_BASE_URL')}/foo`],
    ['foo/', `${config.get('VITE_BASE_URL')}/foo/`],
  ])('pathToUrl(%p, %p) = %p', (path, expected) => {
    expect(pathToUrl(path)).toEqual(expected);
  });
});
