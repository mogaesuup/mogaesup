import { Html, useCursor } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { URL } from "./CONSTANTS";
import * as S from "./style";
import { IGaeSup } from "./type";

export default function Picture({ value, setValue }: IGaeSup) {
  const { scene }: any = useLoader(GLTFLoader, URL + "picture.gltf");

  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const onSetValue = () => {
    setValue({
      ...value,
      title: "모개숲의 활동",
      value: [
        "1) 각종 개발에 관한 토론과 공유",
        "2) 백엔드, 프론트엔드, AI, 블록체인 등 새로운 소식",
        "3) 매주, 매월 개더타운 온라인, 오프라인 모각코",
        "4) 사이드 프로젝트",
      ],
    });
    setHovered(true);
  };

  return (
    <group
      receiveShadow
      castShadow
      scale={[0.5, 0.5, 0.5]}
      position={[3, 1.3, 1]}
      rotation={[Math.PI, 0, 0]}
      onClick={onSetValue}
      onPointerOver={onSetValue}
      onPointerOut={() => {
        setValue({
          ...value,
          title: "",
          value: [""],
        });
        setHovered(false);
      }}
    >
      <Html zIndexRange={[2, 0]}>
        <S.SmallTag>
          <p>모개숲의 활동은? (설명보기)</p>
        </S.SmallTag>
      </Html>
      <primitive object={scene} />
    </group>
  );
}
