import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { URL } from "./CONSTANTS";

export default function Stars() {
  const { scene }: any = useLoader(GLTFLoader, URL + "star.gltf");
  return (
    <group scale={[0.3, 0.3, 0.3]}>
      <primitive object={scene} />
    </group>
  );
}
