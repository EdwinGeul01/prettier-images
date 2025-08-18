import { Rect } from "react-konva";

export const BackgroundRedPurple = (
  props: React.ComponentProps<typeof Rect>
) => {
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
      fillLinearGradientColorStops={[0, "#F54927", 1, "#9C27F5"]}
      {...props}
    />
  );
};
