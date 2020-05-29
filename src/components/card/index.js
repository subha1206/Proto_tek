import React from "react";
import { useDrag } from "react-dnd";

const Card = ({ name, type, uinqId, key } ) => {

  
  const [, drag] = useDrag({
    item: { name, type },
    // end: (item, monitor) => {
    //   const dropResult = monitor.getDropResult();
    //   if (item && dropResult) {
    //     alert(`You dropped ${item.name}`);
    //   }
    // },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <h4 style={{ cursor: "pointer" }} ref={drag}  >
      {name}
    </h4>
  );
};

export default Card;
