export const compact = <T>(array: T[]): NonNullable<T>[] => {
  return array.reduce<NonNullable<T>[]>((acc, cur) => {
    if (cur != null) {
      acc.push(cur as NonNullable<T>);
    }
    return acc;
  }, []);
};
