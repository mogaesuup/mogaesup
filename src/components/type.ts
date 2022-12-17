import {
  AnimationClip,
  BufferGeometry,
  Group,
  Material,
  Skeleton,
} from "three";

type IValue = {
  value: {
    title: string;
    value: string[];
  };
};

type ISetValue = {
  setValue: React.Dispatch<
    React.SetStateAction<{
      title: string;
      value: string[];
    }>
  >;
};

type ITwoNodes = {
  two: {
    geometry: BufferGeometry;
  };
};

type ITwoMaterials = {
  two: Material;
};

type IGaeSupNodes = {
  [name: string]: {
    geometry: BufferGeometry;
    skeleton: Skeleton;
  };
};

type IGaeSuMaterials = {
  [name: string]: Material;
};
export type IDescription = IValue;
export type ITwo = IValue & ISetValue;
export type IBowl = IValue & ISetValue;
export type IGaeSup = IValue & ISetValue;
export type ITwoGLTF = {
  nodes: ITwoNodes;
  materials: ITwoMaterials;
};
export type IGaeSupGLTF = {
  nodes: IGaeSupNodes;
  materials: IGaeSuMaterials;
  animations: AnimationClip[];
  scene: Group;
};
