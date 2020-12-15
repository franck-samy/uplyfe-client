import React from "react";
import Navbar from "../components/Navbar/Navbar";
import UpdateProfile from "../components/UpdateProfileForm/UpdateProfile";

const UpdateProfilePage = (props) => {
  return (
    <div className="UpdateProfile">
      <UpdateProfile {...props} />
      <Navbar {...props} />
    </div>
  );
};

export default UpdateProfilePage;
