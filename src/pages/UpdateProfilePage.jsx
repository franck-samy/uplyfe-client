import React from "react";
import Navbar from "../components/Navbar/Navbar";
import UpdateProfile from "../components/UpdateProfileForm/UpdateProfile";

const UpdateProfilePage = () => {
  return (
    <div className="UpdateProfile">
      <UpdateProfile />
      <Navbar />
    </div>
  );
};

export default UpdateProfilePage;
