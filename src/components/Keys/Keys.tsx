import Key from "./SingleKey/Key";
import { keys } from "../../constants";
import "./keys.css";

const Keys = () => {
  return (
    <>
      <ul className="keys">
        <li>
          <h2>Keys:</h2>
        </li>
        {keys.map((key, index) => (
          <Key key={index} {...key} />
        ))}
      </ul>
    </>
  );
};

export default Keys;
