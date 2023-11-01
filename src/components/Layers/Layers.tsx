import "./layers.css";
import { Floor } from "../";
import { usePointContext } from "../../contexts/pointContext";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const Layers = () => {
  const layers = ["1", "2", "3", "4", "5", "6", "7"];
  const { activeMap } = usePointContext();

  console.log(activeMap);

  return layers.map((layer) => {
    if (+activeMap == +layer) {
      return (
        <motion.div
          key={layer}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, bounce: 0.3, type: "spring" }}
        >
          <Canvas className={`layer`} shadows>
            <OrbitControls />
            {/* Active Floor */}
            <Floor />
          </Canvas>
        </motion.div>
      );
    }
  });
};

export default Layers;
