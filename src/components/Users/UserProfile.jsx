import React from "react";
import { Link } from "react-router-dom";

const UserProfile = (props) => {
  console.log("props:", props);
  return (
    <div>
      <div>
        <h1>{props.user.username}</h1>
      </div>
    </div>
  );
};

export default UserProfile;
