import { Outlet } from 'react-router-dom';
import { Nav } from './style';

const Layout = () => {
  return (
    <div>
      <Nav></Nav>

      <Outlet />
    </div>
  );
};

export default Layout;
