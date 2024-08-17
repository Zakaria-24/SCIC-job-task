import { Outlet } from "react-router-dom";
import NavBar from "../share/NavBar";
import FooTer from "../share/Footer";

const Main = () => {
  return (
    <div className="">
      {/* Navbar */}
      <NavBar />

    
      <div className='pt-4 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>

      {/* Footer */}
      <FooTer />
    </div>
  );
};

export default Main;