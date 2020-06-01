import React from "react";

import { v4 as uuidv4 } from "uuid";

import { Stage, Layer } from "react-konva";

import Rectangle from "../Rect";
import Circ from "../Circle";
import CustText from "../Text";

import { useDrop } from "react-dnd";

const DropZone = ({ accept, meta, setMeta, onDrop }) => {
  const zoom = (e) => {
    let scaleBy = 1.01;

    e.evt.preventDefault();
    var oldScale = e.target.scaleX();

    var pointer = e.target.getPointerPosition();

    var mousePointTo = {
      x: (pointer.x - e.target.x()) / oldScale,
      y: (pointer.y - e.target.y()) / oldScale,
    };

    let newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    e.target.scale({ x: newScale, y: newScale });

    var newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    e.target.position(newPos);
    e.target.batchDraw();
    console.log(pointer);
  };

  const changePosition = (id, x, y) => {
    setMeta({
      ...meta,
      [id]: {
        ...meta[id],
        attrs: {
          ...meta[id]["attrs"],
          position: {
            ...meta[id]["attrs"].position,
            x,
            y,
          },
        },
      },
    });
  };

  const [, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const getShape = (shape) => {
    switch (shape.type) {
      case "Rect":
        return (
          <Rectangle
            key={uuidv4()}
            {...shape}
            changePosition={changePosition}
          />
        );
      case "Circle":
        return (
          <Circ key={uuidv4()} {...shape} changePosition={changePosition} />
        );
      case "Text":
        return (
          <CustText key={uuidv4()} {...shape} changePosition={changePosition} />
        );
      default:
        break;
    }
  };

  return (
    <div ref={drop} style={{ height: "500px", border: "1px solid red" }}>
      <Stage width={700} height={500} onWheel={zoom}>
        <Layer>
          {meta
            ? Object.values(meta).map((shape) => {
                return getShape(shape);
              })
            : null}
        </Layer>
      </Stage>
    </div>
  );
};

export default DropZone;
