"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import type { Group } from "three";

function isWebGLSupported() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function RotatingStars() {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.02;
      group.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <group ref={group}>
      <Stars
        radius={100}
        depth={50}
        count={3500}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
}

export default function StarField() {
  // Degrade gracefully on devices without WebGL, and respect users
  // who prefer reduced motion — the starfield is purely decorative.
  const [enabled] = useState(
    () =>
      isWebGLSupported() &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  if (!enabled) return null;

  return (
    <div className="starCanvas" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <RotatingStars />
      </Canvas>
    </div>
  );
}
