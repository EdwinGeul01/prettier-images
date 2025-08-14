import { Circle, Line, Rect } from "react-konva";

export const macOsFrameBlack = (props: React.ComponentProps<typeof Rect>) => {
  console.log("🚀 ~ macOsFrame ~ props:", props);
  return (
    <>
      <Rect
        {...props}
        shadowEnabled={true}
        stroke="#1C1C1C"
        strokeWidth={10}
        y={props.y}
      ></Rect>
      <Line
        points={[props.x! - 5, props.y!, props.x! + props.width! + 5, props.y!]}
        height={39}
        closed
        stroke="#1C1C1C"
        strokeWidth={39}
      />
      <Circle x={props.x! + 20} y={props.y!} radius={8} fill={"red"}></Circle>
      <Circle
        x={props.x! + 40}
        y={props.y!}
        radius={8}
        fill={"#FFB042"}
      ></Circle>

      <Circle
        x={props.x! + 60}
        y={props.y!}
        radius={8}
        fill={"#93F59C"}
      ></Circle>
    </>
  );
};
