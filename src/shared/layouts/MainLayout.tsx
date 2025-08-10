import type { FC, ReactNode } from 'react';

type MainLayoutProps = {
  Header: ReactNode;
  Footer: ReactNode;
  children?: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ Header, Footer, children }) => {
  return (
    <>
      {Header}
      <main>{children}</main>
      {Footer}
    </>
  );
};
export default MainLayout;
