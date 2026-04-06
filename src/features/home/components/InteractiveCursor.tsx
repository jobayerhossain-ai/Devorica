import React, { useEffect, useRef } from 'react';

const InteractiveCursor: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseMoved = useRef(false);
    const pointer = useRef({ x: 0, y: 0 });
    const params = {
        pointsNumber: 20, // Reduced for performance
        widthFactor: 0.3,
        mouseThreshold: 0.6,
        spring: 0.4,
        friction: 0.5
    };
    const trail = useRef(new Array(params.pointsNumber).fill(null).map(() => ({ x: 0, y: 0, dx: 0, dy: 0 })));

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true }); // Performance hint
        if (!ctx) return;

        const setupCanvas = () => {
            // Using devicePixelRatio but capping it at 2 for low-end devices
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
            
            if (!mouseMoved.current) {
                pointer.current.x = 0.5 * window.innerWidth;
                pointer.current.y = 0.5 * window.innerHeight;
                trail.current.forEach(p => {
                    p.x = pointer.current.x;
                    p.y = pointer.current.y;
                });
            }
        };

        const updateMousePosition = (x: number, y: number) => {
            pointer.current.x = x;
            pointer.current.y = y;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseMoved.current = true;
            updateMousePosition(e.clientX, e.clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            mouseMoved.current = true;
            updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('resize', setupCanvas);

        setupCanvas();

        let animationFrameId: number;
        const render = (t: number) => {
            if (!mouseMoved.current) {
                pointer.current.x = (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * window.innerWidth;
                pointer.current.y = (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) * window.innerHeight;
            }

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            
            ctx.strokeStyle = "rgba(59, 130, 246, 0.45)"; 
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            // Physics update
            const pts = trail.current;
            for (let i = 0; i < pts.length; i++) {
                const p = pts[i];
                const prev = i === 0 ? pointer.current : pts[i - 1];
                const spring = i === 0 ? 0.4 * params.spring : params.spring;
                p.dx += (prev.x - p.x) * spring;
                p.dy += (prev.y - p.y) * spring;
                p.dx *= params.friction;
                p.dy *= params.friction;
                p.x += p.dx;
                p.y += p.dy;
            }

            // Drawing logic: Optimized to O(N) by using separate paths for width tapering
            for (let i = 1; i < pts.length - 1; i++) {
                ctx.beginPath();
                const xc = 0.5 * (pts[i].x + pts[i + 1].x);
                const yc = 0.5 * (pts[i].y + pts[i + 1].y);
                
                // Move to mid-point of previous segment
                const prevXc = 0.5 * (pts[i-1].x + pts[i].x);
                const prevYc = 0.5 * (pts[i-1].y + pts[i].y);
                
                ctx.moveTo(prevXc, prevYc);
                ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
                ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
                ctx.stroke();
            }

            animationFrameId = window.requestAnimationFrame(render);
        };

        animationFrameId = window.requestAnimationFrame(render);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('resize', setupCanvas);
            if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default InteractiveCursor;
