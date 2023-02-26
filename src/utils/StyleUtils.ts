export type StyleValue = string | number;

export const normalizeStyleValue = (value?: StyleValue): string | null => {
  if (value == null) {
    return null;
  }
  return typeof value === 'number' ? `${value}px` : value;
};
