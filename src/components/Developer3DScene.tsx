import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Rotate3D } from 'lucide-react';

interface Developer3DSceneProps {
  className?: string;
}

export const Developer3DScene: React.FC<Developer3DSceneProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const box = containerRef.current;
    if (!box) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;

    try {
      const canvas = document.createElement('canvas');
      const hasWebGL = !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
      if (!hasWebGL) return;

      const width = box.clientWidth || 640;
      const height = width * 0.75;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      renderer.domElement.style.display = 'block';

      const cam = new THREE.PerspectiveCamera(35, 4 / 3, 0.1, 50);
      cam.position.set(0, 3, 9.5);
      cam.lookAt(0, 1.7, 0);

      const scene = new THREE.Scene();
      const group = new THREE.Group();
      scene.add(group);

      scene.add(new THREE.AmbientLight(0xffffff, 0.8));
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
      dirLight.position.set(3, 6, 5);
      scene.add(dirLight);

      const meshes: THREE.Mesh[] = [];

      function m(geo: THREE.BufferGeometry, col: number, x: number, y: number, z: number) {
        const o = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: col, roughness: 0.55 }));
        o.position.set(x, y, z);
        group.add(o);
        meshes.push(o);
        return o;
      }

      const OR = 0xF26A1B;
      const DK = 0x141414;
      const WH = 0xFFFFFF;

      // Ground circular disc matching portfolio palette
      m(new THREE.CylinderGeometry(3.2, 3.2, 0.1, 64), 0xF0ECE1, 0, -0.05, 0);

      // Beanbag / pouf
      m(new THREE.SphereGeometry(1, 32, 24), OR, -0.3, 0.85, -0.4).scale.set(1.5, 1, 1.3);
      m(new THREE.SphereGeometry(1, 32, 24), OR, -0.6, 1.55, -0.95).scale.set(1.2, 1.1, 0.7);

      // Torso
      const torso = m(new THREE.CylinderGeometry(0.45, 0.5, 1.2, 24), WH, -0.3, 2, -0.35);
      torso.rotation.x = -0.2;

      // Head & Hair
      m(new THREE.SphereGeometry(0.38, 24, 20), 0xF1C6A0, -0.3, 2.9, -0.15);
      m(new THREE.SphereGeometry(0.4, 24, 20, 0, Math.PI * 2, 0, Math.PI * 0.55), DK, -0.3, 2.95, -0.18);

      // Legs & feet
      [-0.55, -0.05].forEach((x) => {
        const leg = m(new THREE.CylinderGeometry(0.17, 0.17, 1.5, 16), DK, x, 1.3, 0.55);
        leg.rotation.x = Math.PI / 2 - 0.2;
        m(new THREE.SphereGeometry(0.26, 20, 16), OR, x, 1.05, 1.35).scale.set(1, 0.6, 1.4);
      });

      // Laptop base, screen & glowing logo dot
      m(new THREE.BoxGeometry(1.3, 0.06, 0.9), 0xDDDDDD, -0.3, 1.6, 0.85);
      const sc = m(new THREE.BoxGeometry(1.3, 0.85, 0.05), 0x2A2A2A, -0.3, 2.05, 1.3);
      sc.rotation.x = 0.25;
      const dot = m(new THREE.CircleGeometry(0.11, 24), OR, -0.3, 2.05, 1.34);
      dot.rotation.x = 0.25;

      // Desk lamp
      m(new THREE.CylinderGeometry(0.02, 0.02, 2.6, 8), DK, 2, 3.6, -0.8);
      const lampShade = m(new THREE.CylinderGeometry(0.18, 0.55, 0.45, 32, 1, true), WH, 2, 2.25, -0.8);
      (lampShade.material as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
      const bulb = m(new THREE.SphereGeometry(0.13, 16, 12), 0xFFB061, 2, 2.1, -0.8);
      (bulb.material as THREE.MeshStandardMaterial).emissive = new THREE.Color(0xFF8A2A);

      // Plant pot & foliage
      m(new THREE.BoxGeometry(0.7, 0.6, 0.7), OR, 2.3, 0.3, 0.8);
      m(new THREE.SphereGeometry(0.45, 20, 16), 0x3E9B57, 2.3, 0.95, 0.8);

      let ry = -0.7;
      let drag = false;
      let lx = 0;
      const still = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

      function draw(t: number) {
        group.rotation.y = ry + (still || drag ? 0 : Math.sin((t || 0) / 1800) * 0.22);
        renderer.render(scene, cam);
      }

      function loop(t: number) {
        draw(t);
        if (!still) {
          animationFrameId = requestAnimationFrame(loop);
        }
      }

      // Clear any previous child safely without innerHTML
      while (box.firstChild) {
        box.removeChild(box.firstChild);
      }
      box.appendChild(renderer.domElement);

      const onPointerDown = (e: PointerEvent) => {
        drag = true;
        lx = e.clientX;
        setIsInteracting(true);
        if (box) box.style.cursor = 'grabbing';
      };

      const onPointerUp = () => {
        drag = false;
        setIsInteracting(false);
        if (box) box.style.cursor = 'grab';
      };

      const onPointerMove = (e: PointerEvent) => {
        if (!drag) return;
        ry += (e.clientX - lx) * 0.01;
        lx = e.clientX;
        if (still) draw(0);
      };

      const onResize = () => {
        if (!box) return;
        const w = box.clientWidth;
        renderer.setSize(w, w * 0.75);
        cam.aspect = 4 / 3;
        cam.updateProjectionMatrix();
        if (still) draw(0);
      };

      box.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointerup', onPointerUp);
      box.addEventListener('pointermove', onPointerMove);
      window.addEventListener('resize', onResize);

      if (still) {
        draw(0);
      } else {
        animationFrameId = requestAnimationFrame(loop);
      }

      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        box.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointerup', onPointerUp);
        box.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('resize', onResize);

        meshes.forEach((mesh) => {
          mesh.geometry.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => mat.dispose());
          } else {
            mesh.material.dispose();
          }
        });

        renderer.dispose();
      };
    } catch {
      // Graceful fallback
    }
  }, []);

  return (
    <div className={`w-full max-w-[360px] sm:max-w-[380px] ${className}`}>
      <div className="relative">
        {/* Interaction Hint Badge (subtle, borderless) */}
        <div className="absolute top-1 right-2 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FAF9F5]/80 backdrop-blur-xs text-[10px] font-medium text-[#78716C] pointer-events-none select-none">
          <Rotate3D className={`w-3 h-3 text-[#F26A1B] transition-transform ${isInteracting ? 'animate-spin' : ''}`} />
          <span>Glisser pour pivoter</span>
        </div>

        {/* 3D Canvas Box (seamless, no frame or border) */}
        <div
          id="hero3d"
          ref={containerRef}
          role="img"
          aria-label="Scène 3D : développeur sur un pouf avec son ordinateur, faites glisser pour la faire tourner"
          className="w-full aspect-4/3 cursor-grab touch-pan-y"
        />
      </div>
    </div>
  );
};
