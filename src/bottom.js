import React from "react";
import { Link } from "react-router-dom";

const Diff = ({ activeItem, cmpltItem, add }) => {
  return (
    <div className="bottomBtn">
      <Link to="/">
        <button style={{cursor:"pointer"}} onClick={add}>all</button>
      </Link>
      <Link to="/active">
        <button style={{cursor:"pointer"}} onClick={activeItem}>active</button>
      </Link>
      <Link to="/complete">
        <button style={{cursor:"pointer"}} onClick={cmpltItem}>complete</button>
      </Link>
    </div>
  );
};

export default Diff;
