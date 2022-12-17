import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { Description } from "./components/Description";
import GaeSup from "./components/GaeSup";
import Stars from "./components/Stars";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
import House from "./components/House";
import Kakao from "./components/Kakao";
import Picture from "./components/Picture";
import Footer from "./components/Footer";

export default function App() {
  const [value, setValue] = useState({ title: "", value: [""] });
  return (
    <>
      <Description value={value} />
      <Canvas shadows>
        <OrbitControls
          target={[0, 0.35, 0]}
          maxPolarAngle={1.45}
          minDistance={3}
          maxDistance={5}
          maxAzimuthAngle={Math.PI / 5}
          minAzimuthAngle={-Math.PI / 5}
        />
        <ambientLight intensity={0.1} />
        <color attach="background" args={["#191920"]} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={0.2}
          color={"#ffaeae"}
        />
        <directionalLight
          position={[-10, 10, 10]}
          intensity={0.2}
          color={"#9dfffd"}
        />
        <directionalLight
          position={[-10, 10, -10]}
          intensity={0.2}
          color={"#b6ffae"}
        />
        <GaeSup setValue={setValue} value={value} />
        <Stars />
        <House />
        <Kakao />
        <Picture setValue={setValue} value={value} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={50}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#3a3a3a"
            metalness={0.5}
            mirror={0}
          />
        </mesh>
        <EffectComposer multisampling={8}>
          <Bloom
            kernelSize={3}
            luminanceThreshold={0}
            luminanceSmoothing={0.4}
            intensity={0.6}
          />
          <Bloom
            kernelSize={KernelSize.HUGE}
            luminanceThreshold={0}
            luminanceSmoothing={0}
            intensity={0.5}
          />
        </EffectComposer>
      </Canvas>
      <Footer />
    </>
  );
}
