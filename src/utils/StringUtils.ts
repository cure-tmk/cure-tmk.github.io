export const ltrim = (str: string, trim: string): string => {
  return str.indexOf(trim) === 0 ? str.slice(trim.length) : str;
};

export const rtrim = (str: string, trim: string): string => {
  const i = str.length - trim.length;
  return str.lastIndexOf(trim, i) === i ? str.slice(0, i) : str;
};
