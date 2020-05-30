import React, { useState } from "react";

import DropZone from "../../components/dropable";
import Card from "../../components/card";

import { v4 as uuidv4 } from "uuid";

import { ItemTypes } from "../../constants/types";

import "./style.scss";

const Home = () => {
  const shapes = [
    { name: "Rect", type: ItemTypes.CARD, uinqId: uuidv4(), key: "rect" },
    { name: "Circle", type: ItemTypes.CARD, uinqId: uuidv4(), key: "circ" },
    { name: "Text", type: ItemTypes.CARD, uinqId: uuidv4(), key: "text" },
  ];

  const [meta, setMeta] = useState();

  const handleDrop = (item) => {
    let key;
    switch (item.name) {
      case "Rect":
        key = uuidv4();
        setMeta({
          ...meta,
          [key]: {
            id: key,
            type: "Rect",
            attrs: {
              shape: {
                w: 150,
                h: 100,
              },
              style: {
                stroke: "#333",
                fill: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
              },
              position: {
                x: Math.floor(Math.random() * 200 + 1),
                y: Math.floor(Math.random() * 200 + 1),
              },
            },
            path: "Rect",
          },
        });
        break;
      case "Circle":
        key = uuidv4();
        setMeta({
          ...meta,
          [key]: {
            id: key,
            type: "Circle",
            attrs: {
              shape: {
                r: 50,
              },
              style: {
                stroke: "#333",
                fill: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
              },
              position: {
                x: Math.floor(Math.random() * 200 + 1),
                y: Math.floor(Math.random() * 200 + 1),
              },
            },
            path: "Circle",
          },
        });
        break;
      case "Text":
        key = uuidv4();
        setMeta({
          ...meta,
          [key]: {
            id: key,
            type: "Text",
            attrs: {
              style: {
                stroke: "#333",
                fontSize: 20,
                fill: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
              },
              position: {
                x: Math.floor(Math.random() * 200 + 1),
                y: Math.floor(Math.random() * 200 + 1),
              },
            },
            path: "Text",
          },
        });
        break;

      default:
        break;
    }
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
          <DropZone
            accept={"CARD"}
            onDrop={handleDrop}
            meta={meta}
            setMeta={setMeta}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
