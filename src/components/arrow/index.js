import React from "react";

import { Arrow } from "react-konva";

const CustArrow = ({ handleArrow, shapeId, meta, handleArrowMove, x2, y2 }) => {
  return (
    <Arrow
      points={[0, 100, x2, y2]}
      pointerLength={10}
      pointerWidth={10}
      fill={"black"}
      stroke={"black"}
      strokeWidth={2}
      draggable
      onDragStart={handleArrow}
      onDragMove={handleArrowMove}
      onDragEnd={handleArrowMove}
    />
  );
};

export default CustArrow;
