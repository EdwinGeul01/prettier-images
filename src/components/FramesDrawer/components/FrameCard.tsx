import { Box, Image, Text } from "@chakra-ui/react";
import penguin from "#public/penguin.png";
import useStoreOptions from "../../../hook/useOptions";
import { Layer, Stage, type Rect } from "react-konva";

interface FrameCardProps {
  FrameType: React.ElementType<React.ComponentProps<typeof Rect>>;
  name: string;
}

export const FrameCard: React.FC<FrameCardProps> = ({ FrameType, name }) => {
  const { setFrameType } = useStoreOptions();

  const handleClick = () => {
    setFrameType(FrameType);
  };

  return (
    <Box
      w={"full"}
      h={"200px"}
      p={2}
      bgColor={"gray.100"}
      cursor={"pointer"}
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
        <Text fontSize={"md"} fontWeight={"bold"}>
          {name}
        </Text>
      </Box>
    </Box>
  );
};
