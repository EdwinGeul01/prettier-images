import { Rect } from "react-konva";

export const BackgroundMany = (props: React.ComponentProps<typeof Rect>) => {
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
      fillLinearGradientColorStops={[
        0,
        "#ff867a",
        0.21,
        "#ff8c7f",
        0.52,
        "#cf556c",
        1,
        "#b12a5b",
      ]}
      {...props}
    />
  );
};
