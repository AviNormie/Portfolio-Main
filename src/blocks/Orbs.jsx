import React, { useEffect, useRef } from 'react';

const FloatingOrbs = () => {
  const canvasRef = useRef(null);
  const orbsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize orbs
    const initOrbs = () => {
      orbsRef.current = Array.from({ length: 5 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 150 + 100,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        hue: Math.random() * 60 + 270  // Purple to pink range
      }));
    };

    const drawOrb = (orb) => {
      const gradient = ctx.createRadialGradient(
        orb.x, orb.y, 0,
        orb.x, orb.y, orb.radius
      );
      
      gradient.addColorStop(0, `hsla(${orb.hue}, 70%, 50%, 0.1)`);
      gradient.addColorStop(0.5, `hsla(${orb.hue}, 70%, 50%, 0.05)`);
      gradient.addColorStop(1, 'hsla(0, 0%, 0%, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const updateOrb = (orb) => {
      // Update position
      orb.x += orb.vx;
      orb.y += orb.vy;

      // Bounce off edges with smooth transition
      if (orb.x < -orb.radius) orb.x = window.innerWidth + orb.radius;
      if (orb.x > window.innerWidth + orb.radius) orb.x = -orb.radius;
      if (orb.y < -orb.radius) orb.y = window.innerHeight + orb.radius;
      if (orb.y > window.innerHeight + orb.radius) orb.y = -orb.radius;

      // Mouse interaction
      const dx = mouseRef.current.x - orb.x;
      const dy = mouseRef.current.y - orb.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 400) {
        const angle = Math.atan2(dy, dx);
        const force = (400 - distance) / 10000;
        orb.vx -= Math.cos(angle) * force;
        orb.vy -= Math.sin(angle) * force;
      }

      // Add slight randomness to movement
      orb.vx += (Math.random() - 0.5) * 0.01;
      orb.vy += (Math.random() - 0.5) * 0.01;

      // Limit velocity
      const maxSpeed = 0.5;
      const speed = Math.sqrt(orb.vx * orb.vx + orb.vy * orb.vy);
      if (speed > maxSpeed) {
        orb.vx = (orb.vx / speed) * maxSpeed;
        orb.vy = (orb.vy / speed) * maxSpeed;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      orbsRef.current.forEach(orb => {
        updateOrb(orb);
        drawOrb(orb);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleResize = () => {
      setCanvasSize();
      initOrbs();
    };

    // Initialize
    setCanvasSize();
    initOrbs();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default FloatingOrbs;