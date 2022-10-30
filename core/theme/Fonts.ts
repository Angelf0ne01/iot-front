export const Fonts = {
  sansSerif: 'Roboto, system-ui, sans-serif',
  serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'Menlo, monospace',
};

export const FontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '4rem',
};
export type FontsType = typeof Fonts;
export type FontSizeType = typeof FontSize;
export type FontsKey = keyof FontsType;
export type FontSizeKeys = keyof FontSizeType;
