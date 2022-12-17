import { Html, useCursor } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { URL } from "./CONSTANTS";
import * as S from "./style";

export default function Kakao() {
  const { scene }: any = useLoader(GLTFLoader, URL + "kakao.gltf");

  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  return (
    <group
      receiveShadow
      castShadow
      position={[-3, 0, 1]}
      onClick={() =>
        (window.location.href = "https://open.kakao.com/o/gas2Hpxe")
      }
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Html zIndexRange={[2, 0]}>
        <S.SmallTag>
          <p>모개숲 카카오 채팅방 (@click)</p>
        </S.SmallTag>
      </Html>
      <primitive object={scene} />
    </group>
  );
}

// useGLTF.preload(URL + "two.gltf");
