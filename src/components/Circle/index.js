import React from "react";

import { Circle, Group, Text } from "react-konva";

const Circ = ({ changePosition, attrs, key, id, }) => {
    
  const { position, shape, style } = attrs;

  return (
    <Group
      x={position.x}
      y={position.y}
      draggable
      onDragEnd={(e) => {
        changePosition(id, e.target.x(), e.target.y());
      }}
    >
      <Text text={`x=${position.x} y=${position.y}`} y={-60} />
      <Circle key={key} radius={shape.r} fill={style.fill} />
    </Group>
  );
};

export default Circ;
