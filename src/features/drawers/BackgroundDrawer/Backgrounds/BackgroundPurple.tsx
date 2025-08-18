import React from "react";
import { Rect } from "react-konva";

export const BackgroundPurple = (props: React.ComponentProps<typeof Rect>) => {
  return (
    <Rect
      x={0}
      width={250}
      height={100}
      fill={"black"}
      fillPriority="linear-gradient" // 'color', 'pattern', 'linear-gradient', 'radial-gradient'
      /* linear-gradient */
      fillLinearGradientStartPoint={{
        x: 0,
        y: 0,
      }}
      fillLinearGradientEndPoint={{
        x: 100,
        y: 100,
      }}
      fillLinearGradientColorStops={[0, "#a18cd1", 1, "#fbc2eb"]}
      {...props}
    />
  );
};
