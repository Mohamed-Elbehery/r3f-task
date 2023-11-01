import "./layers.css";
import { Floor, Loader } from "../";
import { usePointContext } from "../../contexts/pointContext";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";

const Layers = () => {
  const layers = ["1", "2", "3", "4", "5", "6", "7"];
  const { activeMap } = usePointContext();

  return layers.map((layer) => {
    if (+activeMap + 1 == +layer) {
      return (
        <motion.div
          key={layer}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, bounce: 0.35, type: "spring" }}
        >
          <Canvas
            camera={{ position: [0, -4, 9], fov: 40 }}
            className={`layer`}
            shadows
          >
            <Suspense fallback={<Loader />}>
              <OrbitControls
                minPolarAngle={Math.PI / 8}
                maxPolarAngle={Math.PI / 1.1}
                minAzimuthAngle={4.8}
                maxAzimuthAngle={1.5}
              />
              {/* Active Floor */}
              <Floor />
            </Suspense>
          </Canvas>
        </motion.div>
      );
    }
  });
};

export default Layers;
