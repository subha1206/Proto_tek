import React from "react";

import { Arrow } from "react-konva";

const CustArrow = ({ handleArrow, shapeId, meta }) => {
  
  
  if (shapeId && meta) {
    const firstObj = Object.values(meta)[0];
    console.log(firstObj.attrs.position);

    const { x, y } = shapeId;
    return (
      <Arrow
        points={[firstObj.attrs.position.x, firstObj.attrs.position.y, x, y]}
        pointerLength={10}
        pointerWidth={10}
        fill={"black"}
        stroke={"black"}
        strokeWidth={2}
        draggable
        // onDragMove={handleArrow}
        // onDragEnd={handleArrow}
      />
    );
  } else {
    return null;
  }
};

export default CustArrow;
