import { Rect } from "react-konva";

export const BlueFrame = (props: React.ComponentProps<typeof Rect>) => {
  return (
    <>
      <Rect {...props} stroke="blue" strokeWidth={20}></Rect>
    </>
  );
};
