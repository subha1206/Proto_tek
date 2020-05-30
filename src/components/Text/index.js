import React from "react";
import { Text, Group } from "react-konva";

const CustText = ({ changePosition, attrs, key, id }) => {
  const { position, style } = attrs;
  return (
    <Group
      x={position.x}
      y={position.y}
      draggable
      onDragEnd={(e) => {
        changePosition(id, e.target.x(), e.target.y());
      }}
    >
      <Text
        key={key}
        text={"You Dropped some random text"}
        fontSize={style.fontSize}
        fill={style.fill}
      />
    </Group>
  );
};

export default CustText;
