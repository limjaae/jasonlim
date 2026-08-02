"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 42;
const CONNECT_DISTANCE = 2.4;
const RADIUS = 4.2;

function generateGraph() {
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = RADIUS * Math.cbrt(Math.random());
    nodes.push(
      new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta) * 0.7,
        r * Math.cos(phi)
      )
    );
  }

  const linePositions: number[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < CONNECT_DISTANCE) {
        linePositions.push(
          nodes[i].x,
          nodes[i].y,
          nodes[i].z,
          nodes[j].x,
          nodes[j].y,
          nodes[j].z
        );
      }
    }
  }

  const nodePositions = new Float32Array(nodes.length * 3);
  nodes.forEach((n, i) => {
    nodePositions[i * 3] = n.x;
    nodePositions[i * 3 + 1] = n.y;
    nodePositions[i * 3 + 2] = n.z;
  });

  return {
    nodePositions,
    linePositions: new Float32Array(linePositions),
  };
}

function Graph() {
  const group = useRef<THREE.Group>(null);
  const { nodePositions, linePositions } = useMemo(() => generateGraph(), []);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.06;
      group.current.rotation.x = Math.sin(Date.now() * 0.00008) * 0.15;
    }
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3a5bc7" transparent opacity={0.28} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial color="#6C9BFF" size={0.09} sizeAttenuation />
      </points>
    </group>
  );
}

export function NetworkScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <Graph />
    </Canvas>
  );
}
