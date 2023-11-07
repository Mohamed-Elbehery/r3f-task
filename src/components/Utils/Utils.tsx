import "./utils.css";
import { usePointContext } from "../../contexts/pointContext";
import { UpChevronIcon, LayersIcon, DownChevronIcon } from "../../assets/";

const Utils = () => {
  const { activeMap, setActiveMap, setToggleInfo } = usePointContext();

  return (
    <>
      {activeMap >= 0 && (
        <div className="utils">
          {/* Up Chevron */}
          <button
            onClick={() => setActiveMap(() => activeMap + 1)}
            className="up-level"
            disabled={activeMap - 1 == 6}
            title="Go Up"
          >
            <UpChevronIcon />
          </button>

          {/* Layers */}
          <button
            onClick={() => {
              setActiveMap(0);
              setToggleInfo(false);
            }}
            title="Reset Floors"
          >
            <LayersIcon />
          </button>

          {/* Down Chevron */}
          <button
            onClick={() => setActiveMap(() => activeMap - 1)}
            className="down-level"
            disabled={activeMap - 1 == 0 || activeMap - 1 == -1}
            title="Go Down"
          >
            <DownChevronIcon />
          </button>
        </div>
      )}
    </>
  );
};

export default Utils;
