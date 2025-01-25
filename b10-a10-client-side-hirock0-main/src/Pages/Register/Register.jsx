import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/Firebase/Firebase.config";
import swal from "sweetalert";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useApiContext } from "../../utils/ContextApi/ContextApi";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoading, passwordEye, setPasswordEye } = useApiContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegister = async (data) => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (response?.user) {
        await updateProfile(response?.user, {
          displayName: data.name,
          photoURL: data.photoUrl,
        });

        const userObj = response?.user.providerData[0];
        userObj.password = data.password;
        const UserData = JSON.stringify(userObj);
        const dbResponse = await axios.post(
          `${import.meta.env.VITE_BACKEND_DOMAIN}/user/register`,
          UserData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (dbResponse?.data?.success) {
          swal({ text: dbResponse?.data?.message, icon: "success" });
          navigate(location.state == null ? "/" : location.state);
        }
      } else {
        swal({ text: "Email already used", icon: "warning" });
      }
    } catch (error) {
      swal({ text: "Email already used!", icon: "warning" });
    }
  };
  return (
    <main
      className={` text-white bg-[url(https://i.ibb.co.com/PmzRJFr/sunset.jpg)] bg-cover bg-center bg-no-repeat pt-16`}
    >
      <section>
        <div className={` pb-10  flex justify-center `}>
          <div className="w-full lg:w-1/2 md:w-5/6 flex justify-center  my-5 backdrop:filter backdrop-blur-sm shadow-lg ">
            <div className="w-full max-w-md p-8 space-y-6">
              <div className=" text-center relative">
                <button
                  to={"/"}
                  onClick={() => navigate(-1)}
                  className=" tooltip tooltip-top absolute left-0 top-0 bg-blue-600 px-3 py-1 rounded-sm shadow-lg hover:bg-blue-700 active:bg-blue-800"
                  data-tip="Back"
                >
                  <FaArrowLeft size={25} />
                </button>

                <h2 className="text-3xl font-semibold text-center">Login</h2>
              </div>

              <form
                onSubmit={handleSubmit((formData) => onRegister(formData))}
                className="space-y-4"
              >
                {/* Name Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium ">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-12 text-black bg-white"
                    placeholder="Enter your name"
                    {...register("name", { required: "Need to fill it!" })}
                  />
                  {errors.name && (
                    <h1 className=" text-red-600 pl-5 mt-1">
                      {errors.name.message}
                    </h1>
                  )}
                </div>
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

                  <div className="relative flex items-center mt-2">
                    <input
                      type={`${passwordEye == false ? "password" : "text"}`}
                      name="password"
                      className="w-full px-4 py-2 border h-12 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black bg-white"
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

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="photoUrl"
                    className="block text-sm font-medium "
                  >
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    className="w-full px-4 py-2 mt-2 border h-12 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black bg-white"
                    placeholder="Enter your photo url"
                    {...register("photoUrl", { required: "Need to fill it!" })}
                  />
                  {errors.photoUrl && (
                    <h1 className=" text-red-600 pl-5 mt-1">
                      {errors.photoUrl.message}
                    </h1>
                  )}
                </div>
                <div className=" ">
                  <div className=" flex items-center gap-5">
                    <input
                      type="checkbox"
                      name="term"
                      {...register("term", {
                        required: "Need to fill it!",
                      })}
                    />
                    <h1>I am agree this agreement to create my account.</h1>
                  </div>
                  {errors.term && (
                    <h1 className=" text-red-600 pl-5 mt-1">
                      {errors.term.message}
                    </h1>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 mt-4 h-12 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none "
                  >
                    Register
                  </button>
                </div>
              </form>
              <div className=" flex items-center justify-center">
                <div className=" flex items-center gap-5">
                  <h1>Already have an account</h1>
                  <Link
                    to={"/user/login"}
                    className=" bg-blue-600 px-5 py-2 rounded-md shadow-lg hover:bg-blue-700 "
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
