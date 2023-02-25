import { config } from '../config';
import { ltrim, rtrim } from './StringUtils';

export const ASSETS_PATH = '/assets';

export const asset = (
  path: string,
  options: {
    absolute?: boolean;
  } = {},
): string => {
  const base = options.absolute ? config.get('VITE_BASE_URL') : '';
  return [base, ASSETS_PATH, path].reduce((acc, segement) => `${rtrim(acc, '/')}/${ltrim(segement, '/')}`);
};

export const pathToUrl = (path: string): string => {
  const base = config.get('VITE_BASE_URL');
  return `${rtrim(base, '/')}/${ltrim(path, '/')}`;
};
