import { Circle, Line, Rect } from "react-konva";

export const macOsFrame = (props: React.ComponentProps<typeof Rect>) => {
  console.log("🚀 ~ macOsFrame ~ props:", props);
  return (
    <>
      <Rect
        {...props}
        shadowEnabled={true}
        shadowColor="black"
        shadowBlur={0}
        shadowOffset={{ x: 0, y: 0 }}
        shadowOpacity={0.5}
        stroke="white"
        strokeWidth={20}
        y={props.y! - 15}
        height={props.height! + 15}
      ></Rect>
      <Line
        points={[props.x! - 5, props.y!, props.x! + props.width! + 5, props.y!]}
        height={39}
        closed
        stroke="white"
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
