import { Box, Text } from "@chakra-ui/react";
import { Layer, Stage, type Rect } from "react-konva";
import useImageProperties from "../../../hook/useOptions";

interface FrameCardProps {
  FrameType: React.ElementType<React.ComponentProps<typeof Rect>>;
  name: string;
}

export const FrameCard: React.FC<FrameCardProps> = ({ FrameType, name }) => {
  const { setFrameType } = useImageProperties();

  const handleClick = () => {
    setFrameType(FrameType);
  };

  return (
    <Box
      w={"full"}
      h={"200px"}
      p={2}
      bgColor={"gray.200"}
      cursor={"pointer"}
      borderRadius={8}
      onClick={handleClick}
    >
      <Stage width={250} height={150}>
        <Layer>
          <FrameType
            x={20}
            y={40}
            width={450}
            height={150}
            fill="grey"
            stroke="black"
          ></FrameType>
        </Layer>
      </Stage>

      <Box mt={2}>
        <Text fontSize={"md"} fontWeight={"bold"} color={"gray.700"}>
          {name}
        </Text>
      </Box>
    </Box>
  );
};
