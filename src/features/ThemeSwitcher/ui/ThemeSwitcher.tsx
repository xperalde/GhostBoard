import type { FC } from 'react';
import { Sun, Moon } from 'react-feather';
import useTheme from '../../../shared/lib/theme/useTheme.ts';
import Button from '../../../shared/ui/Button/Button';

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();
  return <Button onClick={toggleTheme}>{theme === 'light' ? <Moon /> : <Sun />}</Button>;
};

export default ThemeSwitcher;
