import { Fade } from "react-awesome-reveal";
import { FaEdit } from "react-icons/fa";
import { useApiContext } from "../../utils/ContextApi/ContextApi";
import swal from "sweetalert";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import { auth } from "../../utils/Firebase/Firebase.config";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { loggedUser } = useApiContext();

  const onUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const displayName = formData.get("name");
      const email = formData.get("email");
      const photoURL = formData.get("photo");

      const updateObj = {
        displayName,
        email,
        photoURL,
      };
      const stringifyObj = JSON.stringify(updateObj);
      if (auth?.currentUser?.emailVerified) {
        swal({ text: "Email is not verified!", icon: "success" });
      } else {
        const response = await axios.put(
          `${import.meta.env.VITE_BACKEND_DOMAIN}/user/update/${
            loggedUser?.email
          }`,
          stringifyObj,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response?.data?.success) {
          await updateProfile(auth.currentUser, {
            displayName,
            photoURL,
          });
          swal({ text: response?.data?.message, icon: "success" });
        }
      }
    } catch (error) {
      swal({ text: "Some data is missing", icon: "warning" });
    }
  };

  return (
    <div className=" py-10 pb-20 bg-base-200 flex flex-col items-center justify-center">
      <Fade>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className=" ">
              <button
                onClick={() => navigate(-1)}
                className=" font-semibold text-purple-600"
              >
                Back
              </button>
            </div>
            <h2 className="card-title text-center text-primary">
              Update Profile
            </h2>
            <form onSubmit={onUpdateProfile}>
              {/* Name Input */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  name="name"
                  defaultValue={loggedUser?.displayName}
                />
              </div>

              {/* Email Input */}
              <div className="form-control w-full mt-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  name="email"
                  readOnly
                  defaultValue={loggedUser?.email}
                />
              </div>

              {/* Photo URL Input */}
              <div className="form-control w-full mt-4">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter photo URL"
                  className="input input-bordered w-full"
                  name="photo"
                  defaultValue={loggedUser?.photoURL}
                />
              </div>

              {/* Update Button */}
              <div className="card-actions mt-6 justify-center">
                <button
                  type="submit"
                  className="btn btn-primary flex items-center gap-2"
                >
                  <FaEdit />
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default UpdateProfile;
