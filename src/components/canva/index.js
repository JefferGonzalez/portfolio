import { useEffect, useState, useRef } from "react";

import getRandomColor from "../../utils/random-color";

export default function Matrix() {

  const [canvasContext, setCanvasContext] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const obj2D = canvas.getContext("2d");
    canvas.width = document.body.offsetWidth;
    const width = canvas.width;
    const height = canvas.height;
    obj2D.fillStyle = "#000";
    obj2D.fillRect(0, 0, width, height);
    const cols = Math.floor(width / 20) + 1;
    const positionY = Array(cols).fill(0);

    const matrix = () => {
      obj2D.fillStyle = "#3331";
      obj2D.fillRect(0, 0, width, height);
      obj2D.fillStyle = "#0f0";
      obj2D.font = "15pt monospace";

      positionY.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 20;
        obj2D.fillText(text, x, y);
        (y > 100 + Math.random() * 10000) ? positionY[index] = 0 : positionY[index] = y + 20;
      });
    };

    setInterval(matrix, 50);
    setCanvasContext(obj2D);
  }, [canvasRef]);

  return (
    <canvas
      className="min-vw-100 h-25"
      width="100%"
      height="25%"
      ref={canvasRef}
      onClick={() => {
        canvasContext.fillStyle = getRandomColor();
        canvasContext.fillRect(
          0,
          0,
          canvasContext.canvas.width,
          canvasContext.canvas.height
        );
      }}
    ></canvas>
  );
}
