import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import useAuthContext from "../../../hook/useAuthContext";
import { CgCloseR } from "react-icons/cg";
import { RxAvatar } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import shopify from "../../../assets/shopify.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user, logOut } = useAuthContext();
  const [show, setShow] = useState(false);

  // console.log(show);
  const NavLinks = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline  font-bold text-lg dark:text-white"
              : "text-lg font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline  dark:text-white font-bold text-lg"
              : "text-lg font-medium"
          }
        >
        Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline  dark:text-white font-bold text-lg"
              : "text-lg font-medium"
          }
        >
          My Cart
        </NavLink>
      </li>
   
    
    </>
  );

  //logout
 const handleLogout = () => {
    user &&
      logOut()
        .then(() => {
          toast.info("Logout successful!", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage, {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
  };



  return (
    <div className=" ">
      <div className="navbar bg-gray-100 shadow-lg px-0 dark:bg-gray-800 dark:text-gray-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden p-0 px-1"
            >
              {isOpen ? (
                <HiMenuAlt1 size={30}></HiMenuAlt1>
              ) : (
                <CgCloseR size={30}></CgCloseR>
              )}
            </label>
            {isOpen || (
              <ul
                tabIndex={0}
                className={` menu-sm dropdown-content mt-3 z-[1] p-5 shadow rounded-box w-48 top-11 space-y-3 bg-white dark:bg-gray-800 dark:text-gray-100`}
              >
                {NavLinks}
              </ul>
            )}
          </div>
          <Link
            to="/"
            className="font-bold text-xl md:text-2xl cursor-pointer text-center flex items-center"
          >
            <div className="">
              <img className="h-10 w-14" src={shopify} alt="" />
            </div>
            <div>
              <span className="text-[#95BF46] text-5xl">S</span>
              <span className="text-[#95BF46]">hopify</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="relative gap-5  menu-horizontal px-1 ">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="mr-3 text-xl font-bold hidden md:block">
            <span className="font-medium text-lg">
              <span className="text-md">Hi, </span>
            </span>
            {user?.displayName}
          </div>
          {/* avatar part */}
          {user ? (
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar relative"
            >
              <div className="w-10 rounded-full" onClick={() => setShow(!show)}>
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
          ) : (
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar relative"
            >
              <div className="w-10 rounded-full" onClick={() => setShow(!show)}>
                <RxAvatar size={40} />
              </div>
            </label>
          )}

          {/* user info */}

          {user && show && (
            <ul
              tabIndex={0}
              className={`font-bold menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box  absolute top-24 lg:top-24 right-16 space-y-3 dark:bg-gray-800 dark:text-gray-100`}
            >
              <li className="text-2xl ">{user?.displayName}</li>
              {/* <li className="text-lg">Update Profile</li> */}
              {/* <li className="text-lg">Settings</li> */}
              <li onClick={handleLogout} className="text-lg cursor-pointer">
                {user && "Logout"}
              </li>
            </ul>
          )}
          {/* login / logout button */}
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-info bg-[#95BF46] hover:bg-green-400 border-0 btn-circle capitalize ml-3 px-10 text-white text-lg mr-5"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={handleLogout}>
              <button className="btn btn-primary bg-[#95BF46] hover:bg-green-400 border-0 btn-circle capitalize ml-3 px-10 text-white text-lg mr-5">
                Login
              </button>
            </Link>
          )}
        </div>
        <div className="mr-10"></div>
      </div>
      <ToastContainer
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Navbar;
