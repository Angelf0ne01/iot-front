import React, { FunctionComponent } from 'react';

export type Mode = 'light' | 'dark';
export const DEFAULT_MODE: Mode = 'light';
interface ThemeContextProps {
  children: React.ReactNode;
}
interface ThemeContextParams extends ThemeContextProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ThemeContext = React.createContext<Omit<ThemeContextParams, 'children'>>({
  mode: DEFAULT_MODE,
  setMode: () => {},
});

export const ThemeProvider: FunctionComponent<ThemeContextProps> = ({
  children,
}) => {
  const [mode, setMode] = React.useState<Mode>(DEFAULT_MODE);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
