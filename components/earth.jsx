"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion-3d";

export default function earth() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scene = useRef(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/assets/color.jpg",
    "/assets/normal.png",
    "/assets/occlusion.jpg",
  ]);

  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={5} position={[1, 0.1, 0]} />
      <motion.mesh scale={0.5} rotation-y={scrollYProgress}>
        <sphereGeometry args={[6, 32, 16]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
    </Canvas>
  );
}
