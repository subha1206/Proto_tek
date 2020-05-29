import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import { Stage, Layer } from "react-konva";

import Rectangle from "../Rect";
import Circ from "../Circle";
import CustText from "../Text";

import { useDrop } from "react-dnd";

const DropZone = ({ accept, onDrop, itemOnCanvas }) => {
  let lastItem = itemOnCanvas.slice(-1).pop();

  const [itemsArr, setitemsArr] = useState([]);

  let itemToMount = [];
  let testNum = [];

  while (lastItem !== undefined) {
    // switch (lastItem.name) {
    //   case "Rect":
    //     itemToMount.push(<Rectangle key={uuidv4()} />);
    //     testNum.concat(uuidv4())
    //     console.log(testNum);
    //     break;
    //   case "Text":
    //     itemToMount.push(<CustText key={uuidv4()} />);
    //     testNum.concat(uuidv4())
    //     console.log(testNum);
    //     break;
    //   case "Circle":
    //     itemToMount.push(<Circ key={uuidv4()} />);
    //     testNum.concat(uuidv4())
    //     console.log(testNum);

    //     break;
    //   default:
    //     break;
    // }
    if (lastItem.name === "Rect") {
      itemToMount.push(<Rectangle key={uuidv4()} />);
      testNum.concat(uuidv4());
      console.log(testNum);
    } else if (lastItem.name === "Circle") {
      itemToMount.push(<Circ key={uuidv4()} />);
      testNum.concat(uuidv4());
      console.log(testNum);
    } else if (lastItem.name === "Text") {
      itemToMount.push(<CustText key={uuidv4()} />);
      testNum.concat(uuidv4());
      console.log(testNum);
    } else {
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
