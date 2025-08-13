import type { FC, ReactNode } from 'react';
import ButtonStyled from './Button.styled';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;
