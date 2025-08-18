import { Rect } from "react-konva";

export const BackgroundGreen = (props: React.ComponentProps<typeof Rect>) => {
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
      fillLinearGradientColorStops={[0, "#d4fc79", 1, "#96e6a1"]}
      {...props}
    />
  );
};
