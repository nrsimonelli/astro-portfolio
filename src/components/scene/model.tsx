import { useRef } from 'react'
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
// import { useControls } from 'leva'

export const Model = () => {
  const { nodes } = useGLTF('/medias/torrus.glb')
  const { viewport } = useThree()
  const torus = useRef<null | any>(null)

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.02
    }
  })

  // FOR LEVA CONTROLS replace materials with materialProps
  // const materialProps = useControls(
  //   {
  //     thickness: { value: 0.1, min: 0, max: 3, step: 0.05 },
  //     roughness: { value: 0.2, min: 0, max: 1, step: 0.1 },
  //     transmission: { value: 0.4, min: 0, max: 1, step: 0.1 },
  //     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
  //     chromaticAberration: { value: 0.02, min: 0, max: 1 },
  //     backside: { value: true },
  //     color: '#8b5cf6',
  //   },
  //   { collapsed: true }
  // )

  const darkVariation = {
    color: '#8b5cf6',
    thickness: 0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 2.4,
    chromaticAberration: 0.02,
    backside: true,
  }

  // const lightVariation = {
  //   color: '#8b5cf6',
  //   thickness: 0.1,
  //   roughness: 0.2,
  //   transmission: 0.4,
  //   ior: 1.2,
  //   chromaticAberration: 0.02,
  //   backside: true,
  // }

  return (
    <group scale={viewport.width / 3}>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...darkVariation} />
      </mesh>
    </group>
  )
}
