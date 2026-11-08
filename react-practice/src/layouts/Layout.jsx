import {Outlet} from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
function Layout() {
  return (
    <div className="min-h-screen bg-white text-gray-950">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
