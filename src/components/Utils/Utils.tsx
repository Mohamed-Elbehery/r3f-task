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
            disabled={activeMap == 6}
          >
            <UpChevronIcon />
          </button>

          {/* Layers */}
          <button
            onClick={() => {
              setActiveMap(0);
              setToggleInfo(false);
            }}
          >
            <LayersIcon />
          </button>

          {/* Down Chevron */}
          <button
            onClick={() => setActiveMap(() => activeMap - 1)}
            className="down-level"
            disabled={activeMap == 0}
          >
            <DownChevronIcon />
          </button>
        </div>
      )}
    </>
  );
};

export default Utils;
