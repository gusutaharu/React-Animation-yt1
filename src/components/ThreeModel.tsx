import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import { useRef } from "react";

const Model = ({
  url,
  scale,
  rotation,
}: {
  url: string;
  scale: number;
  rotation: number[];
}) => {
  const groupRef = useRef(null);
  const { scene } = useGLTF(url);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.6;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });
  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={scale} rotation={rotation} />
    </group>
  );
};

export const ThreeModel = () => {
  return (
    <motion.div
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 0.8,
        delay: 0.9,
        stiffness: 200,
      }}
      className="h-125"
    >
      <Canvas>
        <ambientLight intensity={3} />
        <Model
          url="/src/assets/models/scene.gltf"
          scale={3}
          rotation={[0, 0, Math.PI / 6]}
        />
        <OrbitControls />
      </Canvas>
    </motion.div>
  );
};
