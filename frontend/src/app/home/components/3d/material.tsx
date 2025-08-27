import { useTexture } from "@react-three/drei";
import { forwardRef } from "react";
import { MeshMatcapMaterial, MeshMatcapMaterialParameters } from "three";
import { useStore } from "./useStore";

export const CustomMaterial = forwardRef<
  MeshMatcapMaterial,
  MeshMatcapMaterialParameters
>((props, ref) => {
  const matcap = useStore((x) => x.texture);
  const texture = useTexture(matcap);
  return (
    <meshMatcapMaterial
      {...props}
      ref={ref}
      matcap={texture}
    ></meshMatcapMaterial>
  );
});
