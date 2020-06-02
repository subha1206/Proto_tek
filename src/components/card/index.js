import React from "react";
import { useDrag } from "react-dnd";

import "./card.scss"

const Card = ({ name, type, icon }) => {
  const [, drag] = useDrag({
    item: { name, type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="sidebar-card">
      {icon}
      <span style={{ cursor: "pointer" }} >
        {name}
      </span>
    </div>
  );
};

export default Card;
