import React, { useState } from "react";

import { Circle } from "react-konva";

const Circ = () => {
  const [isdraging, setisdraging] = useState(false);
  const [x, setX] = useState(200);
  const [y, setY] = useState(100);
  return (
    <Circle
      draggable
      x={x}
      y={y}
      radius={50}
      stroke="black"
      onDragStart={() => setisdraging(true)}
      onDragEnd={(e) => {
        setisdraging(false);
        setX(e.target.x());
        setY(e.target.y());
      }}
    />
  );
};

export default Circ;
