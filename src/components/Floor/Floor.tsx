import { Image } from "@react-three/drei";
import { floor } from "../../assets";
import Points from "../Points/Points";

const Floor = () => {
  return (
    <>
      <Image scale={5} url={floor} />
      <Points />
    </>
  );
};

export default Floor;
