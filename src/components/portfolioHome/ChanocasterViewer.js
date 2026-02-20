import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { Box3, Vector3 } from 'three';

// Load from public folder: put chanocaster.glb in public/ so it’s served at /chanocaster.glb
const MODEL_URL = `${process.env.PUBLIC_URL || ''}/chanocaster.glb`;

// Face on, then 90° counter-clockwise (viewed from above)
const MODEL_ROTATION = [-0.1, Math.PI + Math.PI / 2, 0];
// Move model down so it isn’t too high in the viewer
const MODEL_Y_OFFSET = -3.2;
// Starting up/down camera angle: positive = look down more, negative = look up more
const CAMERA_PITCH_OFFSET = -10;

function CameraToModelHeight() {
  const { scene } = useGLTF(MODEL_URL);
  const { camera } = useThree();
  useEffect(() => {
    const box = new Box3().setFromObject(scene);
    const size = new Vector3();
    box.getSize(size);
    camera.position.y = 0.2 + size.y / 2 + CAMERA_PITCH_OFFSET;
  }, [scene, camera]);
  return null;
}

function Model() {
  const { scene } = useGLTF(MODEL_URL);
  return (
    <group rotation={MODEL_ROTATION} position={[0, MODEL_Y_OFFSET, 0]}>
      <primitive object={scene} />
    </group>
  );
}

function ChanocasterViewer() {
  return (
    <div className="intro2-viewer" style={{ background: '#d8d8d8' }}>
      <Canvas
        camera={{ position: [0, 0.2, 2], fov: 55 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#d8d8d8' }}
      >
        <color attach="background" args={['#d8d8d8']} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} />
        <Suspense fallback={null}>
          <Model />
          <CameraToModelHeight />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          minDistance={1}
          maxDistance={8}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export default ChanocasterViewer;
