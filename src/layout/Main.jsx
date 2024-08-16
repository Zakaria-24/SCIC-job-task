import { Outlet } from "react-router-dom";
import NavBar from "../share/Navbar";
import Footer from "../share/Footer";

const Main = () => {
  return (
    <div className="">
      {/* Navbar */}
      <NavBar />

    
      <div className='pt-4 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;