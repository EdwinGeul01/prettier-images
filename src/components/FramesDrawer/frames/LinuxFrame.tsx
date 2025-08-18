import { Circle, Rect } from "react-konva";

export const LinuxFrame = (props: React.ComponentProps<typeof Rect>) => {
  return (
    <>
      <Rect
        {...props}
        shadowEnabled={true}
        stroke="#1C1C1C"
        strokeWidth={10}
        height={props.height!}
        y={props.y}
        cornerRadius={12}
      ></Rect>
      <Rect
        {...props}
        // points={[props.x! - 5, props.y!, props.x! + props.width! + 5, props.y!]}
        height={39}
        closed
        stroke="#1C1C1C"
        strokeWidth={10}
        fill={"#1C1C1C"}
        cornerRadius={[12, 12, 0, 0]}
      />
      <Circle
        x={props.x! + 20}
        y={props.y! + 20}
        radius={10}
        fill={"#e07548"}
      ></Circle>
      <Circle
        x={props.x! + 45}
        y={props.y! + 20}
        radius={10}
        fill={"#83827d"}
      ></Circle>

      <Circle
        x={props.x! + 70}
        y={props.y! + 20}
        radius={10}
        fill={"#83827d"}
      ></Circle>
    </>
  );
};
