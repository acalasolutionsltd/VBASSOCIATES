import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  varying vec2 vUv;

  void main() {
    // Calculate distance from the center of the screen
    float dist = distance(vUv, vec2(0.5, 0.5));
    
    // Create a smooth radial depth map
    // The center (character) is 1.0 (foreground), the edges (background) are 0.0
    // This perfectly isolates the subject in the middle without needing a real 3D model
    float depth = 1.0 - smoothstep(0.1, 0.5, dist);
    
    // Map the depth to a displacement offset based on mouse position
    // Center pixels move heavily with the mouse, edge pixels do not move
    vec2 offset = uMouse * (depth * 0.035); 
    
    // Zoom in slightly (0.95 scale) so when the image shifts, we don't see black borders
    vec2 displacedUv = (vUv - 0.5) * 0.95 + 0.5;
    
    // Apply the mouse offset
    displacedUv -= offset;
    
    gl_FragColor = texture2D(uTexture, displacedUv);
  }
`;

const ImagePlane = ({ imageUrl }: { imageUrl: string }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const texture = useLoader(THREE.TextureLoader, imageUrl);
  
  // Target and smoothed mouse positions for buttery easing
  const mouseTarget = useRef(new THREE.Vector2(0, 0));
  const mouseSmoothed = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(() => ({
    uTexture: { value: texture },
    uMouse: { value: new THREE.Vector2(0, 0) }
  }), [texture]);

  useFrame((state) => {
    // Get normalized mouse coordinates (-1 to +1) from React Three Fiber pointer state
    mouseTarget.current.x = state.pointer.x;
    mouseTarget.current.y = state.pointer.y;

    // Lerp for smooth, heavy, premium feeling movement
    mouseSmoothed.current.lerp(mouseTarget.current, 0.08);

    if (materialRef.current) {
      materialRef.current.uniforms.uMouse.value.copy(mouseSmoothed.current);
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  );
};

interface Fake3DImageProps {
  imageUrl: string;
}

const Fake3DImage: React.FC<Fake3DImageProps> = ({ imageUrl }) => {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 1], left: -1, right: 1, top: 1, bottom: -1 }}
      gl={{ alpha: true, antialias: true }}
      className="w-full h-full"
    >
      <React.Suspense fallback={null}>
        <ImagePlane imageUrl={imageUrl} />
      </React.Suspense>
    </Canvas>
  );
};

export default Fake3DImage;
