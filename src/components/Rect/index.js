import React, { useEffect } from "react";

import { Rect, Group, Text, Transformer } from "react-konva";

const Rectangle = ({ changePosition, attrs, key, id }) => {
  // const shapeRef = React.useRef();
  // const trRef = React.useRef();
  // React.useEffect(() => {
  //   if (isSelected) {
  //     // we need to attach transformer manually
  //     trRef.current.setNode(shapeRef.current);
  //     trRef.current.getLayer().batchDraw();
  //   }
  // }, [isSelected]);
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
