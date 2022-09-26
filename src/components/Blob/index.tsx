import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const noise3D = createNoise3D();

const speed = 0.8;
const processing = 1.2;
const spikes = 0.4 * processing;

function DisableRender() {
  return useFrame(() => null, 1000);
}

function BlobCamera() {
  const isMobile = false;

  return (
    <PerspectiveCamera
      makeDefault
      fov={45}
      near={0.1}
      far={1e3}
      position={[-0.5, 0, 2]}
      lookAt={() => new THREE.Vector3(isMobile ? -0.8 : -0.4, 0, 0)}
    />
  );
}

function BlobSphere() {
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

  return (
    <mesh>
      <sphereGeometry ref={sphereRef} args={[1, 128, 128]} />
      <meshPhongMaterial color={2434341} shininess={10} />
    </mesh>
  );
}

export default function Blob() {
  const blobRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: blobRef.current,
      onToggle: (self) => {
        if (!!blobRef.current) {
          setInView(self.isActive);
        }
      },
    });
  }, []);

  return (
    <div
      ref={blobRef}
      className={`relative w-full h-screen bg-gradient-to-t from-neutral-800 via-neutral-900 to-black overflow-hidden`}
    >
      <Canvas>
        {!inView && <DisableRender />}

        <BlobCamera />
        <BlobSphere />
        <directionalLight
          color={16777215}
          intensity={1}
          position={[0, 400, 300]}
          castShadow
        />
        <directionalLight
          color={16777215}
          intensity={1}
          position={[0, 200, 100]}
          castShadow
        />
      </Canvas>
    </div>
  );
}
