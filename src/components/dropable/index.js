import React from "react";

import { v4 as uuidv4 } from "uuid";

import { Stage, Layer } from "react-konva";

import Rectangle from "../Rect";
import Circ from "../Circle";
import CustText from "../Text";

import { useDrop } from "react-dnd";



const DropZone = ({ accept, meta, setMeta, onDrop }) => {
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
      <Stage width={700} height={500} onWheel>
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
