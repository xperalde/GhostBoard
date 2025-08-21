import { Outlet } from 'react-router-dom';
import Header from '../../../widgets/LayoutHeader/Header';
import Footer from '../../../widgets/LayoutFooter/Footer';
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
