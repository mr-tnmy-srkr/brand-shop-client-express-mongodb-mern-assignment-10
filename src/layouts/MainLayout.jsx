import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

import useTheme from "../hook/useTheme";
import { useState } from "react";

const MainLayout = () => {
  const [icon, setIcon] = useState(false);

  const { toggleTheme } = useTheme();

  return (
    <div className="">
      
      <div className="2xl:container mx-auto relative">
      <div
        onClick={toggleTheme}
        className={`absolute right-2 top-4 text-black ${
          icon ? "bg-white rounded-xl" : "bg-white rounded-2xl"
        }  border-0`}
      >
        <span onClick={() => setIcon(!icon)} className="btn btn-sm">
          {icon ? (
            <MdDarkMode className="text-2xl "></MdDarkMode>
          ) : (
            <BsSun className="text-xl"></BsSun>
          )}
        </span>
      </div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
