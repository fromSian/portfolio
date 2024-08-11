import "./eraser.css";
const percentPoints = [
  { x: 10, y: 10 },
  { x: 80, y: 5 },
  { x: 15, y: 25 },
  { x: 80, y: 30 },
  { x: 14, y: 45 },
  { x: 85, y: 50 },
  { x: 12, y: 70 },
  { x: 78, y: 75 },
  { x: 10, y: 90 },
  { x: 82, y: 95 },
];

const Eraser = ({ width = 800, height = 500, className = "" }) => {
  const getXY = (point: { x: number; y: number }) => {
    const x = Math.round((point.x / 100) * width);
    const y = Math.round((point.y / 100) * height);
    return `${x} ${y}`;
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#B0A0B0"
      strokeWidth={Math.round(height / 10)}
      strokeMiterlimit={2}
    >
      {percentPoints
        .filter((_, i) => i !== percentPoints.length - 1)
        .map((point, index) => {
          const d = `M${getXY(point)} L${getXY(percentPoints[index + 1])} Z`;
          return <path d={d} className={`svg-elem-${index + 1}`}></path>;
        })}
    </svg>
  );
};

export default Eraser;
