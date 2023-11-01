import { usePointContext } from "../../contexts/pointContext";
import "./levels.css";

const Levels = () => {
  const levels = ["1", "2", "3", "4", "5", "6", "7"];
  const { activeMap, setActiveMap } = usePointContext();

  return (
    <div className="levels">
      {levels.map((lvl) => (
        <button
          key={lvl + 1}
          onClick={() => {
            setActiveMap(+lvl);
          }}
          className={`${activeMap == lvl ? "active-level" : ""}`}
        >
          {+lvl == 1 ? "G" : lvl}
        </button>
      ))}
    </div>
  );
};

export default Levels;
