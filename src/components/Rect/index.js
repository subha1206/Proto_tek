import React from "react";

import { Rect, Group, Text } from "react-konva";

const Rectangle = ({ changePosition, attrs, key, id }) => {
  
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
      <Text text={`Real Time x=${position.x} y=${position.y}`} y={-10} />
      <Rect key={key} width={shape.w} height={shape.h} fill={style.fill} />
    </Group>
  );
};

export default Rectangle;
