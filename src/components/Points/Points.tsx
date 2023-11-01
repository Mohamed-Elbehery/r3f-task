import { floors } from "../../constants";
import Point from "./SinglePoint/Point";

const Points = () => {
  return (
    <>
      {floors.map((floor) =>
        floor.points.map((point, index) => {
          if (floor.id === 4) {
            return <Point key={index} data={point} id={index} />;
          }
        })
      )}
    </>
  );
};

export default Points;
