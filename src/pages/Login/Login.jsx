import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAuthContext from "../../hook/useAuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
// import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userLogin } = useAuthContext();

  // const location = useLocation();
  // console.log(location.state);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // console.log(form);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email,password);

    userLogin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        toast.success("User Login successful", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        //   navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      });
  };

  return (
    <div>
      {/*  <Helmet>
            <title>Login</title>
        </Helmet> */}

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-purple-200 py-20">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-lg mb-2 text-gray-800"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                //   value={email}
                placeholder="Enter your email"
                className="w-full border p-3 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-lg mb-2 text-gray-800"
              >
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="on"
                //   value={password}
                placeholder="Enter your password"
                className="w-full border p-3 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                // onMouseUp={() => setShowPassword(false)}
                // onMouseLeave={() => setShowPassword(false)}
                className="absolute bottom-3 right-3 cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={25} />
                ) : (
                  <BiShow size={25} />
                )}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              Login
            </button>
          </form>

          <div className="mt-2 text-center">
            <p>
              Don’t have an account? please
              <Link
                to="/signup"
                className="text-lg font-bold text-blue-700 ml-2"
              >
                SignUp
              </Link>
            </p>
          </div>
          <br />
          <div className="relative ">
            <div className="border-t border-gray-800 w-full absolute"></div>
            <div className="absolute -top-3 left-1/2 bg-white px-4 transform -translate-x-1/2">
              or
            </div>
          </div>

          <SocialLogin></SocialLogin>
        </div>
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

export default Login;
