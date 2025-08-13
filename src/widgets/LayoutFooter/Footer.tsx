import type { FC } from 'react';
import { memo } from 'react';
import FooterStyled from './Footer.styled.ts';
const FooterComponent: FC = () => {
  return (
    <FooterStyled>
      <p>©Рыжков Данила</p>
      <p>49 поток.self-pased</p>
    </FooterStyled>
  );
};

const Footer = memo(FooterComponent);

export default Footer;
