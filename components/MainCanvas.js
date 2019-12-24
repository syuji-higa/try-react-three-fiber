import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

function Thing() {
  const ref = useRef()
  
  useFrame(({ clock }) => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.z += 0.015
    ref.current.position.x = Math.sin(clock.getElapsedTime()) * 200
    ref.current.position.y = Math.cos(clock.getElapsedTime()) * 200
  })

  return (
    <mesh ref={ref} position={[0, 0, 200]}>
      <boxGeometry attach="geometry" args={[300, 300, 300]} />
      <meshStandardMaterial attach="material" color="#69f" />
    </mesh>
  )
}

const MainCanvas = () => (
  <Canvas camera={{ position: [0, 0, 1000] }}>
    <pointLight
      color='#fff'
      intensity={1}
      position={[0, 0, 1000]}
    />
    <Thing />
  </Canvas>
)

export default MainCanvas
