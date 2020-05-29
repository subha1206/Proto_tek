import React from 'react'

import { Rect } from 'react-konva';


const Rectangle = () => {
    return (
        <Rect
        x={120}
        y={150}
        width={100}
        height={100}
        stroke={"black"}
        shadowBlur={10}
      />
    )
}

export default Rectangle;
