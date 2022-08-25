import React, { Suspense } from "react";

import styles from "../styles/Home.module.css";

import Box from "../components/Box.js";
import Sphere from "../components/AnimatedSphere";
import Iphone from "../components/Iphone";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div style={{ width: "100vw", height: "100vh" }}>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <Box />
            </Suspense>
          </Canvas>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <Sphere />
            </Suspense>
          </Canvas>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <Iphone />
            </Suspense>
          </Canvas>
        </div>
      </main>
    </div>
  );
}
