import React from "react";
import { Link } from "react-router-dom";

const Users = (props) => {
  console.log("props:", props);
  return (
    <div>
      <div>
        <Link to={`/user/${props._id}`}>
          <p>{props.username}</p>
        </Link>
      </div>
    </div>
  );
};

export default Users;
