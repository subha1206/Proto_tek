import React, { useState } from "react";

import DropZone from "../../components/dropable";
import Card from "../../components/card";

import { ItemTypes } from "../../constants/types";

import "./style.scss";

const Home = () => {
  const [canvasMain] = useState([
    { accepts: [ItemTypes.CARD], lastDroppedItem: "" },
  ]);

  const [itemOnCanvas, setItemOnCanvas] = useState([]);
  const [shapes] = useState([
    { name: "Rect", type: ItemTypes.CARD },
    { name: "Circle", type: ItemTypes.CARD },
    { name: "Text", type: ItemTypes.CARD },
  ]);

  const handleDrop = (item) => {
    setItemOnCanvas([...itemOnCanvas, item]);
  };

  return (
    <>
      <div>
        <h1>Just For MarkUp</h1>
      </div>
      <div className="main-container">
        <div className="test">
          <h3>Drag the shapes from Bellow</h3>
          {shapes.map(({ name, type }, index) => (
            <Card name={name} type={type} key={index} />
          ))}
        </div>

        <div className="text2">
          {canvasMain.map(({ accepts }, index) => (
            <DropZone
              accept={accepts}
              key={index}
              onDrop={handleDrop}
              itemOnCanvas={itemOnCanvas}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
