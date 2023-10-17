
import { GrFacebook } from "react-icons/gr";
import { ImGoogle3 } from "react-icons/im";
import useAuthContext from "../../hook/useAuthContext";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

const {googleSignIn,facebookSignIn} = useAuthContext()
const navigate =useNavigate();
const location = useLocation()

const handleSocialLogin = (media)=>{
  media()
  .then((result) => {
    const user = result.user
    // console.log(user);
    toast.success('SignIn successful', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      navigate(location?.state ? location.state : '/')
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
}


  return (
    <div>
      <div className="flex gap-4 lg:gap-0 lg:flex-row flex-col justify-center mt-8 w-full">
        <button onClick={()=>handleSocialLogin(googleSignIn)} className="flex-1 bg-red-500 text-white px-6 py-2 rounded-full mr-2 hover:bg-red-600 ">
          <p className="flex items-center justify-center gap-3">
          
            <span>Continue With </span>
            <span>
              <ImGoogle3 />
            </span>
          </p>
        </button>
        <button onClick={()=>handleSocialLogin(facebookSignIn)} className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          <p className="flex items-center justify-center gap-3">
          
            <span> Continue With</span>
            <span>
              <GrFacebook />
            </span>
          </p>
        </button> 
       
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

export default SocialLogin;
