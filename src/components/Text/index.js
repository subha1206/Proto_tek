import React, { useState } from "react";
import { Text } from "react-konva";

const CustText = () => {
  const [isdraging, setisdraging] = useState(false);
  const [x, setX] = useState(200);
  const [y, setY] = useState(50);
  return (
    <Text
      text={"You Dropped some random text"}
      fontSize={24}
      x={x}
      y={y}
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

export default CustText;
