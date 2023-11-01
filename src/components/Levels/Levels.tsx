import { motion } from "framer-motion";
import { usePointContext } from "../../contexts/pointContext";
import "./levels.css";

const Levels = () => {
  const levels = ["0", "1", "2", "3", "4", "5", "6"];
  const { activeMap, setActiveMap } = usePointContext();
  const lowHeightScreens = screen.height <= 1000 ? 95 : 0;

  const compareLevel = (lvl: number) => {
    return activeMap - 1 == lvl;
  };

  return (
    <div className="levels">
      {levels.map((lvl) => {
        if (activeMap - 1 == +lvl) {
          return (
            <motion.button
              animate={{
                y:
                  screen.height > 1000
                    ? compareLevel(0)
                      ? -445
                      : compareLevel(1)
                      ? -370
                      : compareLevel(2)
                      ? -295
                      : compareLevel(3)
                      ? -220
                      : compareLevel(4)
                      ? -145
                      : compareLevel(5)
                      ? -70
                      : compareLevel(6)
                      ? 0
                      : 0
                    : compareLevel(0)
                    ? -350
                    : compareLevel(1)
                    ? -290
                    : compareLevel(2)
                    ? -230
                    : compareLevel(3)
                    ? -175
                    : compareLevel(4)
                    ? -117
                    : compareLevel(5)
                    ? -60
                    : compareLevel(6)
                    ? -0
                    : 0,
                x: 100,
                rotate: -720,
                transition: { type: "tween", bounce: 3 },
              }}
              key={lvl + 1}
              onClick={() => {
                setActiveMap(+lvl + 1);
              }}
              className={`${+activeMap - 1 == +lvl ? "active-level" : ""}`}
            >
              {+lvl == 0 ? "G" : lvl}
            </motion.button>
          );
        } else {
          return (
            <motion.button
              key={lvl + 1}
              onClick={() => {
                setActiveMap(+lvl + 1);
              }}
              className={`${+activeMap - 1 == +lvl ? "active-level" : ""}`}
            >
              {+lvl == 0 ? "G" : lvl}
            </motion.button>
          );
        }
      })}
    </div>
  );
};

export default Levels;
