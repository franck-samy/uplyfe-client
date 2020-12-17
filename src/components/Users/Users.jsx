import React from "react";
import { Link } from "react-router-dom";
import "./Users.css";

const Users = (props) => {
  console.log("props:", props);
  return (
    <div className="userClass">
      <div className="userList">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to={`/user/${props._id}`}
        >
          <p>{props.username}</p>
        </Link>
      </div>
    </div>
  );
};

export default Users;
