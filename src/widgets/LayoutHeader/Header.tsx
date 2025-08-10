import type { FC } from 'react';
import { memo, useState } from 'react';
import HeaderStyled from './Header.styled';
import Modal from '../../shared/ui/Modal/Modal';
import Button from '../../shared/ui/Button/Button';
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
const HeaderComponent: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <HeaderStyled>
        <p>Проект Aston</p>
        <p>Онлайн интенсив</p>
        <div className="button-container">
          <Button onClick={() => setIsModalOpen(true)}>О проекте</Button>
          <ThemeSwitcher />
        </div>
      </HeaderStyled>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>О проекте</h2>
        <p>Это учебный проект, выполненный в рамках онлайн интенсива Aston.</p>
      </Modal>
    </>
  );
};

const Header = memo(HeaderComponent);

export default Header;
