export const rem = (px: number): number => {
  return px * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
