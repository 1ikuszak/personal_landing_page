'use client';

import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useEffect, useLayoutEffect, useState } from 'react';

const mobile_size = 768;
const tablet_size = 1024;

const mobile_scale = 7;
const tablet_scale = 1.8;
const desktop_scale = 2.1;

const AnimatedSphere = () => {
  const [size, setSize] = useState(1.5);

  useEffect(() => {
    function handleResize() {
      const { innerWidth } = window;
      if (innerWidth < mobile_size) {
        setSize(mobile_scale);
      } else if (innerWidth < tablet_size) {
        setSize(tablet_scale);
      } else {
        setSize(desktop_scale);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    setSize(size);
  }, [size]);

  return (
    <Sphere args={[1, 32, 32]} scale={2}>
      <MeshDistortMaterial
        color="#3b82f6"
        distort={0.6}
        speed={8}
        roughness={0.8}
        metalness={0.5}
      />
    </Sphere>
  );
};

export default AnimatedSphere;
