import React, { FunctionComponent } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { Colors, Fonts, FontSize, BreakPoints, Spacer } from '.';
import { useTheme } from './theme-context';

type Mode = 'light' | 'dark';
interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const { mode } = useTheme();
  const ColorTheme = React.useMemo(
    () => (mode === 'light' ? Colors.LightColors : Colors.DarkColors),
    [mode],
  );

  return (
    <Provider
      theme={{
        Colors: ColorTheme,
        Fonts: Fonts,
        Breakpoints: BreakPoints,
        FontSizes: FontSize,
        Spacer: Spacer,
      }}>
      {children}
    </Provider>
  );
};

export default ThemeProvider;
