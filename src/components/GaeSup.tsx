import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef, useState } from "react";
import { Html, useAnimations, useCursor } from "@react-three/drei";
import { IGaeSup, IGaeSupGLTF } from "./type";
import { URL } from "./CONSTANTS";
import * as S from "./style";

export default function GaeSup({ value, setValue }: IGaeSup) {
  const group = useRef();
  const { scene, animations, nodes, materials }: IGaeSupGLTF = useLoader(
    GLTFLoader,
    URL + "gaesup.gltf"
  );
  const { actions, names } = useAnimations(animations, group);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    actions["idle"]?.reset().fadeIn(0.5).play();
    return () => {
      actions["idle"]?.fadeOut(0.5);
    };
  }, [actions, names]);
  useCursor(hovered);

  const onSetValue = () => {
    setValue({
      ...value,
      title: "개숲이와 시그원",
      value: [
        "모개숲 시그의 마스코트 개숲이입니다.",
        "모개숲 시그는 개발자 멘산부터",
        "코딩을 배우고 싶어하는 멘산의 가입이 가능합니다",
      ],
    });
    actions["idle"]?.fadeOut(0.5);
    actions["greet"]?.reset().fadeIn(0.5).play();
    setHovered(true);
  };

  return (
    <group
      scale={[0.4, 0.4, 0.4]}
      onClick={onSetValue}
      onPointerOver={onSetValue}
      onPointerOut={() => {
        setValue({
          ...value,
          title: "",
          value: [""],
        });
        actions["greet"]?.fadeOut(0.5);
        actions["idle"]?.reset().fadeIn(0.5).play();
        setHovered(false);
      }}
    >
      <Html zIndexRange={[2, 0]}>
        <S.SmallTag>
          <p>모개숲 마스코트 개숲이 (설명보기)</p>
        </S.SmallTag>
      </Html>
      <primitive object={scene} ref={group} visible={false} />

      <skinnedMesh
        castShadow
        receiveShadow
        material={materials.cloth}
        geometry={nodes.cloth_1.geometry}
        skeleton={nodes.cloth_1.skeleton}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        material={materials.mouse}
        geometry={nodes.cloth_2.geometry}
        skeleton={nodes.cloth_2.skeleton}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        material={materials.base}
        geometry={nodes.cloth_3.geometry}
        skeleton={nodes.cloth_3.skeleton}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        material={materials.face}
        geometry={nodes.cloth_4.geometry}
        skeleton={nodes.cloth_4.skeleton}
      />
    </group>
  );
}
