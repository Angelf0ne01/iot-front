import { rgba } from 'polished';

export const LightColors = {
  text: {
    primary: rgba(0, 0, 0, 0.87),
    secondary: rgba(0, 0, 0, 0.54),
    disabled: rgba(0, 0, 0, 0.38),
  },
  action: {
    active: rgba(0, 0, 0, 0.54),
    hover: rgba(0, 0, 0, 0.08),
    selected: rgba(0, 0, 0, 0.14),
    disabled: rgba(0, 0, 0, 0.26),
    disabledBackground: rgba(0, 0, 0, 0.12),
  },
  background: {
    paper: rgba(0, 0, 0, 0.12),
    default: rgba(0, 0, 0, 0.07),
  },
  divider: rgba(0, 0, 0, 0.12),
};

export const DarkColors = {
  text: {
    primary: rgba(255, 255, 255, 0.87),
    secondary: rgba(255, 255, 255, 0.54),
    disabled: rgba(255, 255, 255, 0.38),
  },
  action: {
    active: rgba(255, 255, 255, 0.54),
    hover: rgba(255, 255, 255, 0.08),
    selected: rgba(255, 255, 255, 0.14),
    disabled: rgba(255, 255, 255, 0.26),
    disabledBackground: rgba(255, 255, 255, 0.12),
  },
  background: {
    paper: rgba(255, 255, 255, 0.12),
    default: rgba(255, 255, 255, 0.07),
  },
  divider: rgba(255, 255, 255, 0.12),
};

export const Colors = {
  LightColors,
  DarkColors,
};

export type ColorsType = typeof Colors;
export type LightColorsType = typeof LightColors;
export type DarkColorsType = typeof DarkColors;
export type KeyColors = keyof ColorsType;
export type KeyLightColors = keyof LightColorsType;
export type KeyDarkColors = keyof DarkColorsType;



