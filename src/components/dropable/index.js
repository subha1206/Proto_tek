import React, { useState } from "react";

import { Stage, Layer } from "react-konva";

import Rectangle from "../Rect";
import Circ from "../Circle";
import CustText from "../Text";

import { useDrop } from "react-dnd";

const DropZone = ({ accept, onDrop, itemOnCanvas }) => {
  let lastItem = itemOnCanvas.slice(-1).pop();
  let itemToMount = [];

  while (lastItem !== undefined) {
    switch (lastItem.name) {
      case "Rect":
        itemToMount.push(<Rectangle />);
        break;
      case "Text":
        itemToMount.push(<CustText />);
        break;
      case "Circle":
        itemToMount.push(<Circ />);
        break;
      default:
        break;
    }
    break;
  }

  const [, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} style={{ height: "500px", border: "1px solid red" }}>
      <Stage width={700} height={500}>
        <Layer>{itemToMount}</Layer>
      </Stage>
    </div>
  );
};

export default DropZone;
