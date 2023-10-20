import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import useTheme from "../hook/useTheme"

const MainLayout = () => {

    const { toggleTheme } = useTheme()

    return (
        <div className="">
        <div onClick={toggleTheme} className=" btn btn-secondary">dark</div>
            <div className="2xl:container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;