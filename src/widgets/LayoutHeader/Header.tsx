import type { FC } from 'react';
import { memo } from 'react';
import HeaderStyled from './Header.styled';
const HeaderComponent: FC = () => {
  return (
    <HeaderStyled>
      <p>Проект Aston</p>
      <p>Онлайн интенсив</p>
    </HeaderStyled>
  );
};

const Header = memo(HeaderComponent);

export default Header;
