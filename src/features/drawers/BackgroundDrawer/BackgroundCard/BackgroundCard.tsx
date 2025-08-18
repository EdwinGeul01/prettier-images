import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Layer, Rect, Stage } from "react-konva";
import useStoreImageOptions from "../../../../hook/useOptionsImage";

interface BackgroundCardProps {
  Background?: React.ElementType<React.ComponentProps<typeof Rect>>;
  backgroundName?: string;
}

export const BackgroundCard: React.FC<BackgroundCardProps> = ({
  Background,
  backgroundName,
}) => {
  const { setOptionValues } = useStoreImageOptions();

  const handleClick = () => {
    setOptionValues({ Background: Background });
  };

  return (
    <Box
      onClick={handleClick}
      cursor={"pointer"}
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      boxShadow="inner"
    >
      <Box
        as="h2"
        fontSize="xl"
        mb={2}
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
        flex={1}
        w={"full"}
      >
        <Stage width={250} height={100}>
          <Layer>{Background && <Background />}</Layer>
        </Stage>

        <Box mt={2} textAlign="center">
          <Text fontSize={"sm"}>{backgroundName}</Text>
        </Box>
      </Box>
    </Box>
  );
};
