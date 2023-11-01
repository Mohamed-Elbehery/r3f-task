import { floors, keys } from "../../constants";
import { usePointContext } from "../../contexts/pointContext";

import "./searchKeys.css";

const SearchKeys = ({ query }: { query: string }) => {
  const { setActivePoint, setToggleInfo, setActiveMap, activeMap } =
    usePointContext();

  return keys.map((key) => (
    <li key={key.title} className="key">
      <h3 style={{ color: key.color }}>{key.title}</h3>

      {query ? (
        <>
          {floors.map((floor) => (
            <div key={floor?.id}>
              {floor.points.map((point, index) => {
                if (
                  point.title?.toLowerCase().startsWith(query.toLowerCase()) &&
                  (point.key === key.title || point?.formattedKey === key.title)
                ) {
                  return (
                    <p key={index} onClick={() => setActiveMap(() => floor.id)}>
                      <span
                        onClick={() => {
                          setActivePoint(() => point);
                          setToggleInfo(true);
                        }}
                      >
                        {point.title}
                      </span>{" "}
                      <span>
                        L{floor.id} / {point?.office}
                      </span>
                    </p>
                  );
                } else {
                  return "";
                }
              })}
            </div>
          ))}
        </>
      ) : activeMap ? (
        <>
          {floors.map((floor) => (
            <div key={floor?.id}>
              {floor.points.map((point, index) => {
                if (
                  floor.id == activeMap &&
                  (point.key === key.title || point?.formattedKey === key.title)
                ) {
                  return (
                    <p key={index} onClick={() => setActiveMap(() => floor.id)}>
                      <span
                        onClick={() => {
                          setActivePoint(() => point);
                          setToggleInfo(true);
                        }}
                      >
                        {point.title}
                      </span>{" "}
                      <span>
                        L{floor.id} / {point?.office}
                      </span>
                    </p>
                  );
                }
              })}
            </div>
          ))}
        </>
      ) : (
        <>
          {floors.map((floor) => (
            <div key={floor?.id}>
              {floor.points.map((point, index) => {
                if (
                  point.key === key.title ||
                  point?.formattedKey === key.title
                ) {
                  return (
                    <p key={index} onClick={() => setActiveMap(() => floor.id)}>
                      <span
                        onClick={() => {
                          setActivePoint(() => point);
                          setToggleInfo(true);
                        }}
                      >
                        {point.title}
                      </span>{" "}
                      <span>
                        L{floor.id} / {point?.office}
                      </span>
                    </p>
                  );
                }
              })}
            </div>
          ))}
        </>
      )}
    </li>
  ));
};

export default SearchKeys;
