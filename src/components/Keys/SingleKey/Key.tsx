import React from "react";
import { Key } from "../../../types";
import "./key.css";

const SingleKey: React.FC<Key> = ({ color, title }) => {
  return (
    <li>
      <span className="key-color" style={{ backgroundColor: color }}></span>
      <p>{title}</p>
    </li>
  );
};

export default SingleKey;
