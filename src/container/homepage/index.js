import React, { useState } from "react";

import DropZone from "../../components/dropable";
import Card from "../../components/card";

import { v4 as uuidv4 } from "uuid";

import { ItemTypes } from "../../constants/types";

import "./style.scss";

const Home = () => {
  const [canvasMain] = useState([
    { accepts: [ItemTypes.CARD], lastDroppedItem: "" },
  ]);

  const [itemOnCanvas, setItemOnCanvas] = useState([]);

  const [shapes] = useState([
    { name: "Rect", type: ItemTypes.CARD, uinqId: uuidv4(), key: "rect" },
    { name: "Circle", type: ItemTypes.CARD, uinqId: uuidv4(), key: "circ" },
    { name: "Text", type: ItemTypes.CARD, uinqId: uuidv4(), key: "text" },
  ]);

  const handleDrop = (item) => {
    setItemOnCanvas([...itemOnCanvas, item]);
    console.log("items", item);
  };

  return (
    <>
      <div>
        <h1>Just For MarkUp</h1>
      </div>
      <div className="main-container">
        <div className="test">
          <h3>Drag the shapes from Bellow</h3>
          {shapes.map(({ name, type, uinqId, key }) => (
            <Card name={name} type={type} uinqId={uinqId} key={key} />
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
