import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaEdit } from "react-icons/fa";
import { useApiContext } from "../../utils/ContextApi/ContextApi";
import { Link } from "react-router-dom";

const Profile = () => {
  const { loggedUser } = useApiContext();
  return (
    <div className="min-h-screen bg-base-200">
      {/* Banner Section */}
      <div className="relative">
        <img
          src={"https://i.ibb.co.com/DRGpHCH/Dream.png"}
          alt="Banner"
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-24 left-8">
          <Fade>
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={loggedUser?.photoURL} alt="User" />
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* Profile Details Section */}
      <div className="mt-20 p-6 text-center">
        <Fade direction="up" cascade>
          <h1 className="text-4xl font-bold text-neutral">Hirock Dutta</h1>
          <p className="text-base-content mt-2">{loggedUser?.email}</p>
          {/* Update Button */}

          <div className=" flex justify-center mt-5">
            <Link to={"/profile/update"}>
              <button className="btn btn-primary mt-4 flex items-center gap-2">
                <FaEdit />
                Update Profile
              </button>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Profile;
