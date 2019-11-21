import React from "react";

const GetContact = ({ firstName, comments }) => {
  return (
    <div className="commentSection">
      <h2 className="userName">{firstName}</h2>
      <p className="commentMessage">{comments}</p>
    </div>
  );
};

export default GetContact;
