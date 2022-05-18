import { useLayoutEffect, useState } from 'react';
import IUseTheme from '../interfaces/hooks/useTheme.interface';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';


export const useTheme = (): IUseTheme => {
  const [theme, setTheme] = useState<string>(defaultTheme || localStorage.getItem('app-theme'));

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return { theme, setTheme };
};