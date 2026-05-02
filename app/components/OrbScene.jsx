'use client';

import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';

function Orb() {
  return (
    <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.4}>
      <Sphere args={[1, 128, 128]}>
        <MeshDistortMaterial
          color="#7f5af0"
          emissive="#4d2db7"
          roughness={0.1}
          metalness={0.7}
          distort={0.35}
          speed={1.9}
        />
      </Sphere>
    </Float>
  );
}

export default function OrbScene() {
  return (
    <div className="orb-wrap" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1.1} />
        <pointLight position={[4, 2, 2]} intensity={12} color="#39d0ff" />
        <Stars radius={60} depth={40} count={1200} factor={3} fade speed={0.6} />
        <Orb />
      </Canvas>
    </div>
  );
}
