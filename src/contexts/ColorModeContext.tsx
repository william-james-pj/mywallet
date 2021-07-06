import { createContext, ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { usePersistedState } from '../hooks/usePersistedState';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type ColorContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

type ColorContextProviderProps = {
  children: ReactNode;
};

export const ColorContext = createContext({} as ColorContextType);

export function ColorModeContext(props: ColorContextProviderProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ColorContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorContext.Provider>
  );
}
