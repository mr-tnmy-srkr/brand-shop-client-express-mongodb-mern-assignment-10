import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAuthContext from "../../hook/useAuthContext";
import { BiShow } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

    const { createUser, updateUserProfile,logOut } = useAuthContext();

  const handleRegister = (e) => {
    e.preventDefault();
    //clear the error message
    setErrorMessage("");

    const form = new FormData(e.currentTarget);
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");
    const fullName = `${firstName} ${lastName}`;
    const email = form.get("email");
    const photoUrl = form.get("photoUrl");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    const accepted = form.get("terms")==="on";
    
    // const accepted = e.target.terms.checked;
    // console.log(accepted);
    /* console.log(
      firstName,
      lastName,
      fullName,
      email,
      photoUrl,
      password,
      confirmPassword
    ); */

    //password validation
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password should have at least one uppercase character!");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setErrorMessage("Password should have at least one special character!");
      return;
    } else if (!(password === confirmPassword)) {
      return setErrorMessage("Confirm password should be same as password!");
    } else if (!accepted) {
      setErrorMessage("Please accept our terms and conditions");
      return;
    }

    //user signup
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);

        //update user profile
        updateUserProfile(fullName, photoUrl)})

        .then(() => {

        toast.success("User created successfully", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // logOut();
        // navigate("/login");
        navigate("/");

        })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
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
    <div>
    {/*   <Helmet>
            <title>Sign Up</title>
        </Helmet> */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-purple-200 py-20">
        <div className="bg-transparent p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Sign Up
          </h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-lg mb-2 text-gray-800"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  // value={firstName}

                  placeholder="Enter your first name"
                  className="w-full border p-3 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-lg mb-2 text-gray-800"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  // value={lastName}

                  placeholder="Enter your last name"
                  className="w-full border p-3 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
            </div>
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
            <div>
              <label
                htmlFor="email"
                className="block text-lg mb-2 text-gray-800"
              >
                Image Link:
              </label>
              <input
                type="photoUrl"
                id="photo_url"
                name="photoUrl"
                //   value={email}

                placeholder="Enter your photo URL"
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
                className="w-full border p-3 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-300 "
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

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-lg mb-2 text-gray-800"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="on"
                //   value={confirmPassword}

                placeholder="Confirm your password"
                className="w-full border p-3 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <p className="flex items-center">
              <input
                className="w-5 h-5"
                type="checkbox"
                name="terms"
                id="terms"
              />
              <label htmlFor="terms" className="ml-2">
                Please accept our
                <a href="#" className="text-blue-800 font-bold cursor-pointer">
                  T&C
                </a>
              </label>
            </p>

            {errorMessage && (
              <p className="text-yellow-600 font-bold">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-2 text-center">
            <p>
              Already have an account? please
              <Link
                to="/login"
                className="text-lg font-bold text-blue-700 ml-2"
              >
                Login
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

export default Signup;
