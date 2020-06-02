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
    const stage = e.target.getStage();

    var oldScale = stage.scaleX();

    var pointer = stage.getPointerPosition();

    var mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    let newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    e.target.scale({ x: newScale, y: newScale });

    var newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    stage.position(newPos);
    stage.batchDraw();
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

  const dragFuntion = (e) => {
    e.evt.preventDefault();

    let scaleBy = 1.01;

    let x = e.target.x();
    let scalex = e.target.scaleX();
    let scaley = e.target.scaleY();
  };

  return (
    <div ref={drop} style={{ height: "500px", border: "1px solid red" }}>
      <Stage
        draggable
        width={700}
        height={500}
        onWheel={zoom}
        onDragEnd={dragFuntion}
      >
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
