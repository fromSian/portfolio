import { useEffect, useMemo, useRef } from "react";
// import "./eraser.css";
const percentPointsTall = [
  { x: 10, y: 15 },
  { x: 80, y: 10 },
  { x: 12, y: 25 },
  { x: 80, y: 30 },
  { x: 10, y: 45 },
  { x: 85, y: 50 },
  { x: 12, y: 70 },
  { x: 78, y: 75 },
  { x: 9, y: 85 },
  { x: 82, y: 90 },
];

const percentPointsShort = [
  { x: 10, y: 20 },
  { x: 82, y: 25 },
  { x: 8, y: 45 },
  { x: 86, y: 50 },
  { x: 9, y: 70 },
  { x: 85, y: 75 },
];

const Eraser = ({ width = 800, height = 300, className = "" }) => {
  const percentPoints = useMemo(
    () => (height > 500 ? percentPointsTall : percentPointsShort),
    [height]
  );
  const pathsRef = useRef<SVGPathElement[]>([]);
  const getXY = (point: { x: number; y: number }) => {
    const x = Math.round((point.x / 100) * width);
    const y = Math.round((point.y / 100) * height);
    return `${x} ${y}`;
  };

  useEffect(() => {
    pathsRef.current?.forEach((item, index) => {
      const length = item.getTotalLength();
      const step = 1.125 / pathsRef.current.length;
      item.setAttribute("stroke-dasharray", length + "");
      item.setAttribute("stroke-dashoffset", length + "");
      const keyframes = [
        {
          strokeDasharray: length,
          strokeDashoffset: length,
        },
        {
          strokeDasharray: length,
          strokeDashoffset: 0,
        },
      ];
      const options = {
        duration: step * 1000,
        delay: step * index * 1000,
        fill: "both" as FillMode,
      };
      item.animate(keyframes, options);
    });
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#c4c389"
      strokeWidth={Math.round(height / 8)}
      style={{
        filter: "blur(0.8px)",
      }}
    >
      {percentPoints
        .filter((_, i) => i !== percentPoints.length - 1)
        .map((point, index) => {
          const d = `M${getXY(point)} L${getXY(percentPoints[index + 1])} Z`;
          return (
            <path
              key={`path${index}`}
              ref={(element) => {
                if (element) {
                  pathsRef.current[index] = element;
                }
              }}
              d={d}
              className={`svg-elem-${index + 1}`}
            ></path>
          );
        })}
    </svg>
  );
};

export default Eraser;
