import { Box, Button, Flex, Float, Image } from "@chakra-ui/react";
import { useMainContext } from "../../context/useMainContext";
import tableFrame from "#public/TablerFrame.svg";
import backgroundIco from "#public/backgroundIco.svg";
import imageEditIco from "#public/toolIco.svg";
import { Tooltip } from "../../components/Tooltip/Tooltip";

export const OptionsBar = () => {
  const { useFramesDrawer, useBackgrounDrawer } = useMainContext();

  return (
    <Float zIndex={10000} asChild placement={"bottom-center"} offsetY={10}>
      <Box
        bgColor={"whiteAlpha.950"}
        w={"400px"}
        h={"55px"}
        borderRadius={"10px"}
        p={1}
      >
        <Flex
          w={"full"}
          h={"full"}
          justifyContent={"left"}
          alignItems={"start"}
        >
          <Tooltip content="Frames">
            <Button
              onClick={() => useFramesDrawer.setIsOpen(true)}
              bgColor={"transparent"}
              h={"full"}
              p={0}
              _hover={{ bgColor: "blackAlpha.400" }}
            >
              <Image
                src={tableFrame}
                objectFit={"contain"}
                alt={"table frame"}
                p={2}
                h={"100%"}
              />
            </Button>
          </Tooltip>
          <Tooltip content="background">
            <Button
              onClick={() => useBackgrounDrawer.setIsOpen(true)}
              bgColor={"transparent"}
              h={"full"}
              p={0}
              _hover={{ bgColor: "blackAlpha.400" }}
            >
              <Image
                src={backgroundIco}
                objectFit={"contain"}
                alt={"table frame"}
                p={2}
                h={"100%"}
              />
            </Button>
          </Tooltip>
          <Tooltip content="Image Edit">
            <Button
              onClick={() => useBackgrounDrawer.setIsOpen(true)}
              bgColor={"transparent"}
              h={"full"}
              p={0}
              _hover={{ bgColor: "blackAlpha.400" }}
            >
              <Image
                src={imageEditIco}
                objectFit={"contain"}
                alt={"table frame"}
                p={2}
                h={"100%"}
              />
            </Button>
          </Tooltip>
        </Flex>
      </Box>
    </Float>
  );
};
