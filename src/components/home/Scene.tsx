// components/Scene.tsx
"use client";

import React from "react";
import { OrbitControls, Stars, Float, Text3D } from "@react-three/drei";
import { Colors } from "@/constants/Color";

const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[-2, 0, 0]}
        >
          LaunchMate
          <meshStandardMaterial color={Colors.TEXT} />
        </Text3D>
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

export default Scene;
