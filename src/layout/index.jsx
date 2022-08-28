import { Outlet } from 'react-router-dom';
import { Nav } from './style';
import menu from "../assets/images/menu.png";

const Layout = () => {
  return (
    <div>
      <Nav imgUrl={menu}></Nav>

      <Outlet />
    </div>
  );
};

export default Layout;
