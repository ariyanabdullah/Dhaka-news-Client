import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <h1>This is Terms And Condition page </h1>
      <Link to="/register">
        {" "}
        <button className="btn btn-primary"> Back To Register </button>
      </Link>
    </div>
  );
};

export default TermsAndCondition;
