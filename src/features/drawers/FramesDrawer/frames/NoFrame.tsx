import { Rect } from "react-konva";

export const NoFrame = (props: React.ComponentProps<typeof Rect>) => {
  return (
    <>
      <Rect
        {...props}
        stroke="transparent"
        strokeWidth={0}
        fill={"transparent"}
      ></Rect>
    </>
  );
};
