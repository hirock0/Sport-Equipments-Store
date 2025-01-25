import { Link, NavLink } from "react-router-dom";
import swal from "sweetalert";
import { LuMenu } from "react-icons/lu";
import { useApiContext } from "../../utils/ContextApi/ContextApi";
import { IoIosLogOut } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/Firebase/Firebase.config";
import { useNavigate, useLocation } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const {
    navFlag,
    setNavFlag,
    themeFlag,
    setThemeFlag,
    loggedUser,
    popupFlag,
    setPopupFlag,
  } = useApiContext();
  const location = useLocation();
  const pathname = location.pathname;
  const onLogout = async () => {
    try {
      const response = await signOut(auth);
      if (response == undefined) {
        swal({
          text: "Logout successfully!",
          icon: "success",
        });
        setPopupFlag(false);
        navigate("/");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <nav
      className={`
      ${
        pathname == "/user/login" || pathname == "/user/register"
          ? " fixed z-50 backdrop:filter backdrop-blur-md top-0 left-0 right-0 flex items-center text-white "
          : " sticky z-50 top-0 bg-base-100 flex items-center "
      } h-20
    `}
    >
      <section className=" w-full">
        <div className=" flex items-center justify-between">
          <div className=" bg-base-300 rounded-full overflow-hidden">
            <img
              src="https://i.ibb.co.com/zHLW7HH/sports-equipment.webp"
              alt="logo"
              className=" w-14 h-14 max-md:w-12 max-md:h-12 object-contain "
            />
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className={`   flex items-center gap-5 max-md:fixed max-md:right-0 max-md:top-20 max-md:flex-col max-md:items-start max-md:bg-slate-800  max-md:h-screen max-md:w-1/2 max-md:p-5 ${
              !navFlag && "max-md:translate-x-full"
            } max-md:transition-all max-md:text-white`}
          >
            <NavLink
              to={"/"}
              className={
                "max-md:bg-slate-600 max-md:w-full max-md:pl-2 max-md:py-5 max-md:rounded-sm max-md:shadow-lg max-md:hover:bg-slate-700"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/all_sports_equipments"}
              className={
                "max-md:bg-slate-600 max-md:w-full max-md:pl-2 max-md:py-5 max-md:rounded-sm max-md:shadow-lg max-md:hover:bg-slate-700"
              }
            >
              All Equipments
            </NavLink>
            <NavLink
              to={"/add_products"}
              className={
                "max-md:bg-slate-600 max-md:w-full max-md:pl-2 max-md:py-5 max-md:rounded-sm max-md:shadow-lg max-md:hover:bg-slate-700"
              }
            >
              Add Equipment
            </NavLink>
            <NavLink
              to={"/my_equipments"}
              className={
                "max-md:bg-slate-600 max-md:w-full max-md:pl-2 max-md:py-5 max-md:rounded-sm max-md:shadow-lg max-md:hover:bg-slate-700"
              }
            >
              My Equipments
            </NavLink>
            <NavLink
              to={"/products"}
              className={
                "max-md:bg-slate-600 max-md:w-full max-md:pl-2 max-md:py-5 max-md:rounded-sm max-md:shadow-lg max-md:hover:bg-slate-700"
              }
            >
              Products
            </NavLink>
          </div>
          <div className=" flex items-center gap-2">
            <div
              className="form-control lg:tooltip lg:tooltip-left w-fit "
              data-tip="Theme"
              onClick={() => setThemeFlag(!themeFlag)}
            >
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  name="check"
                  className="toggle toggle-primary"
                  defaultChecked
                />
              </label>
            </div>
            <div className="">
              {loggedUser ? (
                <div className=" group">
                  <button className="">
                    <img
                      src={loggedUser?.photoURL || null}
                      alt="user"
                      className=" w-10 h-10 rounded-full"
                    />
                  </button>
                  <div className=" p-5 text-center fixed right-0 hidden group-hover:block h-52 border bg-base-100 ">
                    <Fade>
                      <div className=" flex justify-center items-center">
                        <img
                          src={loggedUser?.photoURL || null}
                          alt="user"
                          className=" w-10 h-10 rounded-full"
                        />
                      </div>

                      <h1>{loggedUser?.displayName}</h1>
                      <h1>{loggedUser?.email}</h1>
                      {/* divider */}

                      <div className=" divider"></div>
                      <div className=" flex justify-between gap-5 items-center">
                        <Link
                          to={`/user/profile`}
                          className=" flex bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-semibold text-white items-center gap-2 px-4 py-1 rounded-md shadow-lg"
                        >
                          Profile
                        </Link>

                        <button
                          onClick={() => setPopupFlag(true)}
                          className=" flex bg-green-600 hover:bg-green-700 active:bg-green-800 font-semibold text-white items-center gap-2 px-4 py-1 rounded-md shadow-lg"
                        >
                          <IoIosLogOut size={20} />
                          <span>Logout</span>
                        </button>
                      </div>

                      {/* divider */}
                    </Fade>
                  </div>
                </div>
              ) : (
                <Link to={"/user/login"}>Login</Link>
              )}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation(), setNavFlag(!navFlag);
              }}
              className=" md:hidden"
            >
              <LuMenu size={25} />
            </button>
          </div>
        </div>
      </section>
      <section
        className={`${
          !popupFlag ? "hidden" : "block"
        } fixed text-white flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-slate-800/80 z-50`}
      >
        <div className=" bg-slate-800 rounded-lg shadow-lg w-fit p-10 max-sm:p-5 flex flex-col items-center">
          <h1 className=" text-center text-4xl max-md:text-2xl">
            Do you want to logout?
          </h1>
          <div className=" flex items-center mt-5 gap-5">
            <button
              onClick={() => setPopupFlag(false)}
              className="  py-2 px-10 max-sm:px-5 bg-green-600 hover:bg-green-700 activegreen-red-800 rounded-md shadow-lg"
            >
              Cancel
            </button>
            <button
              onClick={onLogout}
              className="  py-2 px-10 max-sm:px-5 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-md shadow-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
