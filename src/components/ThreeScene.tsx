import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const Monolith: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        {/* A tall, sleek box shape */}
        <boxGeometry args={[2, 6, 2]} />
        <MeshTransmissionMaterial
          background={new THREE.Color('#F5F2ED')}
          thickness={1.5}
          roughness={0.1}
          transmission={0.9}
          ior={1.5}
          chromaticAberration={0.04}
          color="#3D344B"
        />
        {/* Wireframe edges for architectural feel */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(2.01, 6.01, 2.01)]} />
          <lineBasicMaterial color="#4E425F" transparent opacity={0.3} />
        </lineSegments>
      </mesh>
    </Float>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        <Monolith />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
