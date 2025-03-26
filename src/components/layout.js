import Sidebar from './sidebar';
import Mainside from './mainside';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">

      <Mainside />

      <Sidebar />


      <div className="flex-1 p-8 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;