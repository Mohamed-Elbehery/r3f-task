import { usePointContext } from "../../contexts/pointContext";
import "./levels.css";

const Levels = () => {
  const levels = ["0", "1", "2", "3", "4", "5", "6"];
  const { setActiveMap } = usePointContext();

  return (
    <div className="levels">
      {levels.map((lvl) => (
        <button
          key={lvl + 1}
          onClick={() => {
            setActiveMap(+lvl + 1);
          }}
        >
          {+lvl == 0 ? "G" : lvl}
        </button>
      ))}
    </div>
  );
};

export default Levels;
