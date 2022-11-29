import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useDevice } from '@/hooks/useDevice';

const noise3D = createNoise3D();

const speed = 0.8;
const processing = 1.2;
const spikes = 0.4 * processing;

function DisableRender() {
  return useFrame(() => null, 1000);
}

function BlobCamera() {
  const { isTouch } = useDevice();
  return (
    <PerspectiveCamera
      makeDefault
      fov={45}
      near={0.1}
      far={1e3}
      position={[-0.5, 0, 2]}
      lookAt={() => new THREE.Vector3(isTouch ? -0.2 : -0.4, 0, 0)}
    />
  );
}

function SphereGeometry(props: any) {
  const sphereRef = useRef<THREE.SphereGeometry>(null);
  const vector = new THREE.Vector3();

  useFrame(() => {
    const position = sphereRef.current?.attributes.position;
    const time = 3e-5 * performance.now() * speed * Math.pow(processing, 5);
    if (position) {
      for (let i = 0, l = position.count; i < l; i++) {
        vector.fromBufferAttribute(position, i);
        const noise = noise3D(
          vector.x * spikes,
          vector.y * spikes,
          vector.z * spikes + time,
        );
        vector.normalize().multiplyScalar(1 + 0.3 * noise);
        position.setXYZ(i, vector.x, vector.y, vector.z);
      }
      sphereRef.current?.computeVertexNormals();

      position.needsUpdate = true;
    }
  });

  return <sphereGeometry ref={sphereRef} {...props} />;
}

function BlobSphere() {
  return (
    <mesh>
      <SphereGeometry args={[1, 128, 128]} />
      <meshPhongMaterial color={2434341} />
    </mesh>
  );
}

function DirectionalLight(props: any) {
  return <directionalLight color={16777215} {...props} />;
}

function BlobCanvas({ isInView }: { isInView: boolean }) {
  return (
    <Canvas>
      {!isInView && <DisableRender />}

      <BlobCamera />
      <BlobSphere />
      <DirectionalLight intensity={2} position={[0, 400, 200]} castShadow />
      <DirectionalLight intensity={2} position={[0, 200, 100]} castShadow />
    </Canvas>
  );
}

export default function Blob() {
  const blobRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: blobRef.current,
      onToggle: (self) => {
        if (!!blobRef.current && self.isActive != isInView) {
          setIsInView(self.isActive);
        }
      },
    });
  });

  return (
    <div
      ref={blobRef}
      className={`w-full h-screen bg-gradient-to-t from-neutral-800 via-neutral-900 to-black overflow-hidden`}
    >
      <BlobCanvas isInView={isInView} />
    </div>
  );
}
