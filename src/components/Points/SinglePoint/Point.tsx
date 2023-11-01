import { Svg } from "@react-three/drei";
import { mapPin } from "../../../assets";
import { Point } from "../../../types";
import { usePointContext } from "../../../contexts/pointContext";

type Props = {
  data: Point;
  id?: number;
};

const PointSvg: React.FC<Props> = (props) => {
  const { setActivePoint, setToggleInfo } = usePointContext();

  return (
    <Svg
      key={props.data?.id}
      onClick={() => {
        setActivePoint(props.data);
        setToggleInfo(true);
      }}
      position={props.data.position}
      rotation={[0.7, 0, 0]}
      src={mapPin}
      scale={0.02}
    />
  );
};

export default PointSvg;
