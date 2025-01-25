import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../../utils/Firebase/Firebase.config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import { useApiContext } from "../../utils/ContextApi/ContextApi";
import axios from "axios";

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const Login = () => {
  const location = useLocation();
  const { setLoggedUser, setLoading, passwordEye, setPasswordEye } =
    useApiContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = async (data) => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      if (response?.user) {
        swal({ text: "Login successfully", icon: "success" });
        navigate(location.state == null ? "/" : location.state);
      } else {
        swal({ text: "please check your email or password", icon: "warning" });
      }
    } catch (error) {
      swal({ text: "You are not registered", icon: "warning" });
    }
  };

  // google authentication

  const googleAuthentication = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      const user = response?.user?.providerData;
      setLoggedUser(user[0]);
      const UserData = JSON.stringify(user[0]);
      if (user) {
        const dbResponse = await axios.post(
          `${import.meta.env.VITE_BACKEND_DOMAIN}/user/login`,
          UserData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (dbResponse?.data?.success) {
          swal({ text: "Login successfully", icon: "success" });
          navigate(location.state == null ? "/" : location.state);
        }
      } else {
        swal({ text: "please check your email or password", icon: "warning" });
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return (
    <main
      className={` text-white bg-[url(https://i.ibb.co.com/PmzRJFr/sunset.jpg)] bg-cover bg-center bg-no-repeat pt-16`}
    >
      <section>
        <div
          className={`   min-h-screen pb-10  flex flex-col justify-center items-center `}
        >
          <div className=" absolute left-0 right-0 z-40 top-24 w-full container mx-auto px-5 ">
            <Link
              to={"/"}
              className=" md:hidden bg-blue-600 px-5 py-2 rounded-sm shadow-lg hover:bg-blue-700 active:bg-blue-800"
            >
              Home
            </Link>
          </div>
          <div className="w-full lg:w-1/2 md:w-5/6 flex justify-center items-center  py-10 backdrop:filter backdrop-blur-sm shadow-lg ">
            <div className="w-full max-w-md p-8 space-y-6">
              <div className=" text-center">
                <h2 className="text-3xl font-semibold text-center">Login</h2>
              </div>

              <form
                onSubmit={handleSubmit((formData) => onLogin(formData))}
                className="space-y-4"
              >
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium ">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-12 text-black bg-white"
                    placeholder="Enter your email"
                    {...register("email", { required: "Need to fill it!" })}
                  />
                  {errors.email && (
                    <h1 className=" text-red-600 pl-5 mt-1">
                      {errors.email.message}
                    </h1>
                  )}
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium "
                  >
                    Password
                  </label>
                  <div className=" relative flex items-center mt-2">
                    <input
                      type={`${passwordEye == false ? "password" : "text"}`}
                      name="password"
                      className="w-full px-4 py-2  border h-12 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black bg-white"
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Need to fill it!",
                      })}
                    />
                    <div
                      onClick={() => setPasswordEye(!passwordEye)}
                      className=" cursor-pointer text-black absolute right-2"
                    >
                      <FaEye
                        size={25}
                        className={`${!passwordEye && "hidden"}`}
                      />
                      <FaEyeSlash
                        size={25}
                        className={`${passwordEye && "hidden"}`}
                      />
                    </div>
                  </div>
                  {errors.email && (
                    <h1 className=" text-red-600 pl-5 mt-1">
                      {errors.password.message}
                    </h1>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 mt-4 h-12 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none"
                  >
                    Login
                  </button>
                </div>
              </form>

              {/* Google Login Button */}
              <div className="mt-4 text-center ">
                <Link
                  state={location.state}
                  to={"/user/register"}
                  className="w-full py-4 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none"
                >
                  Create new account
                </Link>
                <div className=" text-nowrap flex items-center gap-2">
                  <div className=" divider divider-accent w-full"></div>
                  <h1>Login with</h1>
                  <div className=" divider divider-accent w-full"></div>
                </div>

                <button
                  onClick={googleAuthentication}
                  className="w-full py-3 px-4 bg-zinc-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                >
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
