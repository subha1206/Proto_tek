import React from "react";

import { Arrow } from "react-konva";

const CustArrow = ({ handleArrow, handleArrowMove, pointsArr }) => {

  console.log("dsd", pointsArr)
  return (
    <Arrow
      points={[0, 100,pointsArr.slice(-1)[0].x, pointsArr.slice(-1)[0].y ]}
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
