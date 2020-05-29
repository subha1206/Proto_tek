import React, { useState } from "react";

import { Rect } from "react-konva";

const Rectangle = () => {
  const [isdraging, setisdraging] = useState(false);
  const [x, setX] = useState(120);
  const [y, setY] = useState(150);
  return (
    <Rect
      x={x}
      y={y}
      width={100}
      height={100}
      stroke={"black"}
      shadowBlur={10}
      draggable
      onDragStart={() => setisdraging(true)}
      onDragEnd={(e) => {
        setisdraging(false);
        setX(e.target.x());
        setY(e.target.y());
      }}
    />
  );
};

export default Rectangle;
