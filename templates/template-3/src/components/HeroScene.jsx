import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// A live 3D centrepiece: a wireframe "signal core" (icosahedron edges + an inner point cloud
// + an orbit ring). It tilts toward the mouse, can be dragged to rotate, and pauses when off-screen.
const HeroScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const width = () => mount.clientWidth;
    const height = () => mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width(), height());
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width() / height(), 0.1, 100);
    camera.position.set(0, 0, 7);

    const group = new THREE.Group();
    scene.add(group);

    // outer shell: crisp edges
    const shellGeo = new THREE.IcosahedronGeometry(1.9, 1);
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(shellGeo),
      new THREE.LineBasicMaterial({ color: 0xff5b1f, transparent: true, opacity: 0.9 })
    );
    group.add(edges);

    // inner core: point cloud
    const pts = new THREE.Points(
      new THREE.IcosahedronGeometry(1.15, 4),
      new THREE.PointsMaterial({ color: 0xe8e6df, size: 0.025, transparent: true, opacity: 0.8 })
    );
    group.add(pts);

    // orbit ring
    const ring = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(new THREE.EllipseCurve(0, 0, 2.7, 2.7).getPoints(128).map((p) => new THREE.Vector3(p.x, p.y, 0))),
      new THREE.LineBasicMaterial({ color: 0xe8e6df, transparent: true, opacity: 0.18 })
    );
    ring.rotation.x = Math.PI / 2.4;
    group.add(ring);

    // pointer tilt + drag rotate
    const target = { x: 0, y: 0 };
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let spinX = 0;
    let spinY = 0;
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      target.y = nx * 0.4;
      target.x = ny * 0.25;
      if (dragging) {
        spinY += (e.clientX - lastX) * 0.01;
        spinX += (e.clientY - lastY) * 0.01;
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };
    const onDown = (e) => { dragging = true; lastX = e.clientX; lastY = e.clientY; };
    const onUp = () => { dragging = false; };
    window.addEventListener('pointermove', onMove);
    mount.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);

    // pause rendering while the hero is off-screen
    let visible = true;
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(mount);

    const onResize = () => {
      camera.aspect = width() / height();
      camera.updateProjectionMatrix();
      renderer.setSize(width(), height());
    };
    window.addEventListener('resize', onResize);

    // "materialise" in: scale from 0.6 and fade the edges in
    let intro = reduce ? 1 : 0;
    let raf;
    const clock = new THREE.Clock();
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      const t = clock.getElapsedTime();
      intro = Math.min(1, intro + 0.015);
      const s = 0.6 + 0.4 * (1 - Math.pow(1 - intro, 3));
      group.scale.setScalar(s);
      edges.material.opacity = 0.9 * intro;
      if (!reduce) {
        spinY += 0.0025;
        pts.rotation.y = -t * 0.15;
      }
      group.rotation.y += (target.y + spinY - group.rotation.y) * 0.06;
      group.rotation.x += (target.x + spinX - group.rotation.x) * 0.06;
      renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('resize', onResize);
      mount.removeEventListener('pointerdown', onDown);
      shellGeo.dispose();
      edges.geometry.dispose();
      edges.material.dispose();
      pts.geometry.dispose();
      pts.material.dispose();
      ring.geometry.dispose();
      ring.material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full cursor-grab active:cursor-grabbing" data-cursor="hot" aria-label="Interactive 3D shape — drag to rotate" role="img" />;
};

export default HeroScene;
