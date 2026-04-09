// useDroneGUI.ts
import { useEffect } from 'react';
import GUI from 'lil-gui';
import * as THREE from 'three';

interface UseDroneGUIProps {
  modalRef: React.RefObject<THREE.Group | null>;
}

export function useDroneGUI({ modalRef }: UseDroneGUIProps) {
  useEffect(() => {
    if (!modalRef.current) return;

    const gui = new GUI({ title: 'Drone Controls' });

    /* ---------------- Outer Group ---------------- */
    const outer = modalRef.current;

    const outerFolder = gui.addFolder('Outer (Global)');
    outerFolder.add(outer.position, 'x', -5, 5, 0.01).name('positionX').listen();
    outerFolder.add(outer.position, 'y', -5, 5, 0.01).name('positionY').listen();
    outerFolder.add(outer.position, 'z', -5, 5, 0.01).name('positionZ').listen();

    outerFolder.add(outer.rotation, 'x', -Math.PI, Math.PI, 0.01).name('rotationX').listen();
    outerFolder.add(outer.rotation, 'y', -Math.PI, Math.PI, 0.01).name('rotationY').listen();
    outerFolder.add(outer.rotation, 'z', -Math.PI, Math.PI, 0.01).name('rotationZ').listen();
    outerFolder.open();

    return () => {
      gui.destroy();
    };
  }, [modalRef.current]);
}
