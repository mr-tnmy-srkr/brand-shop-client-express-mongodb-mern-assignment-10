import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { MdDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';

import useTheme from "../hook/useTheme"
import { useState } from "react";

const MainLayout = () => {

    const [icon,setIcon] = useState(true)

    const { toggleTheme } = useTheme()

    return (
        <div className="">
        <div onClick={toggleTheme} className={`btn  btn-sm absolute right-2 top-4 text-black ${icon ? "bg-white":"bg-gray-400"}  border-0`}>
   <span onClick={()=>setIcon(!icon)}>
    {

       icon? <MdDarkMode className="text-xl"></MdDarkMode> : <BsSun className="text-xl"></BsSun>
    }
   </span>
        
        </div>
            <div className="2xl:container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;