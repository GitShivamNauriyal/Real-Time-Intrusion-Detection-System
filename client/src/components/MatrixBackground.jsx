import { useEffect, useRef } from "react";

/**
 * MatrixBackground
 * @param {number} speed - Delay between frames in ms (lower is faster, default 50)
 * @param {string} charset - String of characters to use for the rain (optional)
 */
export default function MatrixBackground({ speed = 50, charset }) {
    const canvasRef = useRef();

    // Default charset: Japanese + ASCII + numbers + symbols
    const defaultCharset =
        "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}<>|/?+-=";

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const fontSize = 18;
        const columns = Math.floor(width / fontSize);
        const drops = Array(columns).fill(1);

        // Use provided charset or default
        const chars = (
            charset && charset.length > 0 ? charset : defaultCharset
        ).split("");

        function draw() {
            ctx.fillStyle = "rgba(20,20,20,0.15)";
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px monospace`;
            ctx.fillStyle = "#fb923c"; // Tailwind orange-400

            for (let i = 0; i < columns; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        let animationFrameId;
        let lastTime = 0;

        function animate(now) {
            if (!lastTime || now - lastTime >= speed) {
                draw();
                lastTime = now;
            }
            animationFrameId = requestAnimationFrame(animate);
        }
        animationFrameId = requestAnimationFrame(animate);

        function handleResize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
        // eslint-disable-next-line
    }, [speed, charset]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            aria-hidden="true"
        />
    );
}
