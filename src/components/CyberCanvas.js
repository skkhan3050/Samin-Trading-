// High-Performance Interactive Cyber/Fintech Constellation Canvas
export function initTradingCanvas() {
  const canvas = document.getElementById('trading-matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let animationFrameId;
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const mouse = {
    x: width / 2,
    y: height / 2,
    targetX: width / 2,
    targetY: height / 2,
    active: false,
    radius: 180
  };

  const resizeHandler = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  const mouseMoveHandler = (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.active = true;
  };

  const mouseLeaveHandler = () => {
    mouse.active = false;
  };

  window.addEventListener('resize', resizeHandler, { passive: true });
  window.addEventListener('mousemove', mouseMoveHandler, { passive: true });
  document.addEventListener('mouseleave', mouseLeaveHandler, { passive: true });

  // Generate multi-tiered nodes (Neon Lime, Cyan, White)
  const isMobile = window.innerWidth < 768;
  const nodeCount = isMobile ? 32 : Math.min(Math.floor(window.innerWidth / 22), 70);
  
  const colors = [
    { r: 183, g: 255, b: 0 },    // Neon Lime
    { r: 0, g: 240, b: 255 },    // Neon Cyan
    { r: 16, g: 231, b: 111 },   // Emerald Green
    { r: 255, g: 255, b: 255 }   // Pure White
  ];

  const nodes = Array.from({ length: nodeCount }, () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      originX: Math.random() * width,
      originY: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 1,
      color: color,
      pulseSpeed: Math.random() * 0.03 + 0.015,
      pulseAngle: Math.random() * Math.PI * 2,
      baseAlpha: Math.random() * 0.4 + 0.2
    };
  });

  // Floating Micro Tickers / Data Glyphs
  const glyphs = Array.from({ length: isMobile ? 4 : 10 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vy: -(Math.random() * 0.3 + 0.1),
    text: ['BTC +3.4%', 'ETH 4H BOS', '1:3.2 R:R', 'SWEEP CONFIRMED', 'ALPHA // ACTIVE', 'VOL 2.4x'][Math.floor(Math.random() * 6)],
    alpha: Math.random() * 0.2 + 0.08,
    size: Math.floor(Math.random() * 2) + 9
  }));

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Smooth mouse lerp
    mouse.x += (mouse.targetX - mouse.x) * 0.08;
    mouse.y += (mouse.targetY - mouse.y) * 0.08;

    // 1. Draw subtle floating data glyphs
    ctx.font = `600 10px "JetBrains Mono", monospace`;
    for (const g of glyphs) {
      g.y += g.vy;
      if (g.y < -30) {
        g.y = height + 20;
        g.x = Math.random() * width;
      }
      ctx.fillStyle = `rgba(0, 240, 255, ${g.alpha})`;
      ctx.fillText(g.text, g.x, g.y);
    }

    // 2. Draw connecting constellation lines
    const maxDistance = isMobile ? 110 : 160;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const factor = 1 - dist / maxDistance;
          const lineAlpha = factor * 0.18;
          
          const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
          grad.addColorStop(0, `rgba(${nodes[i].color.r}, ${nodes[i].color.g}, ${nodes[i].color.b}, ${lineAlpha})`);
          grad.addColorStop(1, `rgba(${nodes[j].color.r}, ${nodes[j].color.g}, ${nodes[j].color.b}, ${lineAlpha * 0.7})`);

          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = factor * 1.2;
          ctx.stroke();
        }
      }
    }

    // 3. Update & render individual nodes with interactive mouse magnetism
    for (const node of nodes) {
      // Natural drifting
      node.x += node.vx;
      node.y += node.vy;

      // Mouse interactive influence
      if (mouse.active) {
        const mdx = mouse.x - node.x;
        const mdy = mouse.y - node.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouse.radius) {
          const force = (1 - mDist / mouse.radius) * 1.5;
          node.x -= (mdx / mDist) * force * 1.2;
          node.y -= (mdy / mDist) * force * 1.2;

          // Connecting line to mouse cursor
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(183, 255, 0, ${(1 - mDist / mouse.radius) * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Screen edge boundary bounce
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Pulse calculations
      node.pulseAngle += node.pulseSpeed;
      const currentAlpha = node.baseAlpha + Math.sin(node.pulseAngle) * 0.15;
      const currentRadius = node.radius + Math.sin(node.pulseAngle) * 0.4;

      // Outer soft glow halo
      ctx.beginPath();
      ctx.arc(node.x, node.y, currentRadius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${currentAlpha * 0.25})`;
      ctx.fill();

      // Core node dot
      ctx.beginPath();
      ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${currentAlpha})`;
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(render);
  }

  render();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseleave', mouseLeaveHandler);
  };
}
