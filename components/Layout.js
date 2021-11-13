import layoutStyles from './Layout.module.scss';
import Nav from './Navigation';

const Layout = function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <Nav />
      <div className={layoutStyles.layout}>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
