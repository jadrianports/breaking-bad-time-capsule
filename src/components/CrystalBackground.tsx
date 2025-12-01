import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Crystal = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial 
          color="#369457" 
          transparent 
          opacity={0.3}
          emissive="#369457"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const CrystalBackground = () => {
  const crystalPositions: [number, number, number][] = [
    [-5, 2, -5],
    [5, -2, -5],
    [-3, -3, -8],
    [4, 3, -6],
    [0, 1, -10],
    [-6, -1, -7],
    [6, 0, -9],
    [-2, 4, -6],
    [3, -4, -8],
  ];

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={1} color="#369457" />
        
        {crystalPositions.map((position, index) => (
          <Crystal key={index} position={position} />
        ))}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};

export default CrystalBackground;
