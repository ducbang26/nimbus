import React, { useRef } from 'react';

import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function AboutDrone({ ...props }): React.ReactElement {
  const { nodes, materials } = useGLTF('/models/dji-fpv/drone.gltf');
  const groupRef = useRef(null);

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      rotation={[-0.3, 0, 0]}
      position={[0, -0.7, 0]}
      scale={0.8}
    >
      <group position={[0, 1.017, -0.135]} rotation={[-0.475, 0, 0]} scale={3.531}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_5 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_6 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_7 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_8 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_9 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Metall_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_10 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials['Material.009']}
          />
        </group>
        <group rotation={[0.416, 0.015, 0.076]} scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_16 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_17 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_18 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_19 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_D2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_20 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D1}
          />
        </group>
        <group rotation={[0.502, 0, 0]} scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_22 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Rubber_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_23 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Rubber_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_24 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Rubber_D1}
          />
        </group>
        <group rotation={[0.446, 0, 0]} scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_26 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_27 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Rubber_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_28 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D2}
          />
        </group>
        <group rotation={[0.622, 0, 0]} scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_30 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_D2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_31 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_32 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Rubber_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_33 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_L2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_34 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_35 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_Base}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_36 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_37 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_38 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials['Material.013']}
          />
        </group>
        <group scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_40 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_41 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_42 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_Base}
          />
        </group>
        <group scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_44 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_45 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_46 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_47 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_D2}
          />
        </group>
        <group scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_49 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_50 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.CARBONE}
          />
        </group>
        <group scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_56 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_57 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_58 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_Base}
          />
        </group>
        <group scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_60 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_61 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Rubber_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_62 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_L1}
          />
        </group>
        <group scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_64 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_65 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_66 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_Base}
          />
        </group>
        <group scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_70 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Mettal_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_71 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Metall_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_72 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Metall_D1}
          />
        </group>
        <group scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_74 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_75 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_L1}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.316, 0.283, 0.283]}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_77 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_Base}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_78 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Metall_D2}
          />
        </group>
        <group scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_80 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_81 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_D2}
          />
        </group>
        <group scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_83 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_84 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_85 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_D2}
          />
        </group>
        <group scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_87 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Green_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_88 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Green_L2E}
          />
        </group>
        <group rotation={[1.117, 0, 0]} scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_90 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Rubber_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_91 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Rubber_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_92 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_L2}
          />
        </group>
        <group rotation={[0.644, 0, 0]} scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_94 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_95 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_96 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_D2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_97 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_98 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_99 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_Base}
          />
        </group>
        <group scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_101 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Red_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_102 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Red_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_103 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Red_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_104 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_L1}
          />
        </group>
        <group rotation={[0, 0, -Math.PI / 2]} scale={0.27}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_108 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_109 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_110 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_111 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_Base}
          />
        </group>
        <group rotation={[0, 0, -Math.PI / 2]} scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_113 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_114 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Metall_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_115 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Metall_D1}
          />
        </group>
        <group rotation={[0, 0, -Math.PI / 2]} scale={0.27}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_119 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_120 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_D2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_121 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_122 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_Base}
          />
        </group>
        <group rotation={[-0.771, 0, 0]} scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_126 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_127 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Grey_D2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_128 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_129 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Rubber_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_130 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_131 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_Base}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_132 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Plastic_D2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_133 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Yellow_L1}
          />
        </group>
        <group rotation={[-1.329, 0, 0]} scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_135 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials['Material.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_136 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials['Material.012']}
          />
        </group>
        <group rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.283, 0.313, 0.283]}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_142 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Metall_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_143 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Metall_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_144 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Metall_D2}
          />
        </group>
        <group rotation={[-2.586, 0, -Math.PI]} scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_146 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Metall_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_147 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Metall_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_148 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Metall_D2}
          />
        </group>
        <group scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_150 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.CARBONE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_151 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials['Material.001']}
          />
        </group>
        <group rotation={[0, -Math.PI / 2, 0]} scale={0}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_155 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_156 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials['Material.001']}
          />
        </group>
        <group position={[0.017, 0.444, -0.003]} scale={0.283}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_162 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_L1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_163 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.CARBONE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_164 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_D1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_165 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.M_D2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_166 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials.Red_Basic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes.Object_167 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
            }
            material={materials['Material.010']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_12 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials.Material}
          scale={0.283}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_14 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials['Material.007']}
          position={[0, -0.009, -0.002]}
          scale={0.283}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_52 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials['Material.006']}
          scale={0.283}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_54 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials['Material.014']}
          rotation={[1.117, 0, 0]}
          scale={0.283}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_68 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials.Metall_D2}
          rotation={[0.644, 0, 0]}
          scale={0.283}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_106 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials['Material.016']}
          scale={0.283}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_117 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials.Plastic_D1}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.27}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_124 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials['Material.008']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.283}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_138 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials.material}
          rotation={[0.266, 1.045, -2.015]}
          scale={0.283}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_140 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials.material}
          rotation={[-2.501, 1.206, 0.61]}
          scale={0.283}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_153 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials.Rubber_Basic}
          scale={[0.267, 0.283, 0.283]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_158 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials['Rubber_Tire.002']}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_160 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials['Material.007']}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={0.283}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes.Object_169 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
          }
          material={materials['Material.015']}
          rotation={[-0.113, 0, 0]}
          scale={0.283}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes.Object_171 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
        }
        material={materials['Material.002']}
        position={[0.49, 1.373, 0.37]}
        rotation={[0.512, 0, -Math.PI / 2]}
        scale={0.126}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes.Object_173 as THREE.Object3D & { geometry: THREE.BufferGeometry }).geometry
        }
        material={materials['Material.002']}
        position={[-0.493, 0.866, 0.064]}
        rotation={[0.546, 0, Math.PI / 2]}
        scale={0.126}
      />
    </group>
  );
}

useGLTF.preload('/models/dji-fpv/drone.gltf');
