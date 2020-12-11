import React from "react";

const Profile = (props) => {
  return (
    <div className="profile">
      <img
        style={{ width: 70, borderRadius: 50 }}
        src="../../images/defaut-pic.jpg"
        alt="pic"
      />
      <h3 className="username">Username</h3>
      <h5>inspirations</h5>
      <h5>inspired</h5>
      <p className="bio" style={{ fontSize: 10 }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque libero
        natus a reiciendis aliquam accusantium vero consectetur ipsam, quibusdam
        nostrum eos ratione iste perspiciatis tenetur!
      </p>
    </div>
  );
};

export default Profile;
