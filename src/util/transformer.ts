export const capitalizeEachWord = (val: string): string => {
  const arrStr = val.split(' ');
  return arrStr
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');
};
