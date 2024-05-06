import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Model } from './model'

export const Scene = () => {
  return (
    <Canvas>
      <Model />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset='studio' />
    </Canvas>
  )
}
