import React, { useEffect, useRef } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate stars
    const starCount = Math.floor((width * height) / 4500);
    const stars = Array.from({ length: Math.min(220, Math.max(80, starCount)) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.15 + 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2
    }));

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / width - 0.5) * 20;
      mouseY = (e.clientY / height - 0.5) * 20;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Subtle deep nebula background gradients
      const grad1 = ctx.createRadialGradient(
        width * 0.5 + mouseX * 2,
        height * 0.9 + mouseY * 2,
        10,
        width * 0.5,
        height * 0.9,
        Math.max(width, height) * 0.65
      );
      grad1.addColorStop(0, 'rgba(22, 34, 74, 0.45)');
      grad1.addColorStop(0.6, 'rgba(10, 16, 36, 0.2)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.8 - mouseX * 1.5,
        height * 0.15 - mouseY * 1.5,
        10,
        width * 0.8,
        height * 0.15,
        Math.max(width, height) * 0.55
      );
      grad2.addColorStop(0, 'rgba(27, 23, 64, 0.35)');
      grad2.addColorStop(0.7, 'rgba(8, 13, 28, 0.15)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        const twinkle = Math.sin(tick * star.twinkleSpeed + star.twinklePhase);
        const currentAlpha = Math.max(0.1, Math.min(1, star.alpha + twinkle * 0.3));

        const renderX = star.x + mouseX * (star.size * 0.3);
        const renderY = star.y + mouseY * (star.size * 0.3);

        ctx.beginPath();
        ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(238, 241, 246, ${currentAlpha})`;
        ctx.fill();

        if (star.size > 1.2) {
          ctx.beginPath();
          ctx.arc(renderX, renderY, star.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(143, 202, 255, ${currentAlpha * 0.25})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <canvas id="sky-canvas" ref={canvasRef} />
      <div className="vignette" />
    </>
  );
}
