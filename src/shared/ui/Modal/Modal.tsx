import type { FC, ReactNode } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: FC<ModalProps> & {
  Header: FC<{ children: ReactNode }>;
  Body: FC<{ children: ReactNode }>;
  Footer: FC<{ children: ReactNode }>;
} = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const modalRoot = document.getElementById('modal-root');
  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

Modal.Header = ({ children }) => <div className={styles.modal__header}>{children}</div>;

Modal.Body = ({ children }) => <div className={styles.modal__body}>{children}</div>;

Modal.Footer = ({ children }) => <div className={styles.modal__footer}>{children}</div>;

export default Modal;
