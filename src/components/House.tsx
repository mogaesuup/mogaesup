import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { URL } from "./CONSTANTS";

export default function House() {
  const { scene }: any = useLoader(GLTFLoader, URL + "house.gltf");
  return (
    <group receiveShadow castShadow>
      <primitive object={scene} />
    </group>
  );
}
