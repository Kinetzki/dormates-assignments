import React, { useState } from "react";

function Profile(props) {
  const [clicked, setCliked] = useState(false);
  return (
    <>
      <div
        className="profile"
        onClick={() => {
          setCliked(!clicked);
        }}
        onMouseEnter={() => {
            setCliked(true);
          }}
      >
        {clicked && <div className="name">{props.name}</div>}
        <img src={props.pic} alt="" />
      </div>
      <h2 className="title">{props.work}</h2>
    </>
  );
}

export default Profile;
