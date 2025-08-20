import tableFrame from "#public/TablerFrame.svg";
import backgroundIco from "#public/backgroundIco.svg";
import handGrabIco from "#public/handGrabIco.svg";
import imageEditIco from "#public/toolIco.svg";
import { Box, Flex, Float } from "@chakra-ui/react";
import { useMainContext } from "../../context/useMainContext";
import { OptionCard } from "./OptionCard";
import useStoreImageOptions from "../../hook/useOptionsImage";

export const OptionsBar = () => {
  const { useFramesDrawer, useBackgrounDrawer, useImageOptionDrawer } =
    useMainContext();
  const { setOptionValues, OptionSelected } = useStoreImageOptions();

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
          <OptionCard
            hoverText="hand grab"
            icon={handGrabIco}
            OptionNumber={1}
            onClickAction={() => {
              if (OptionSelected === 1) {
                setOptionValues({
                  OptionSelected: null,
                });
                return;
              }
              setOptionValues({
                OptionSelected: 1,
              });
            }}
          />
          <OptionCard
            hoverText="Frames"
            icon={tableFrame}
            OptionNumber={2}
            onClickAction={() => {
              useFramesDrawer.setIsOpen(true);
            }}
          />
          <OptionCard
            hoverText="Background"
            icon={backgroundIco}
            OptionNumber={3}
            onClickAction={() => {
              useBackgrounDrawer.setIsOpen(true);
            }}
          />
          <OptionCard
            hoverText="Image Properties"
            icon={imageEditIco}
            OptionNumber={4}
            onClickAction={() => {
              useImageOptionDrawer.setIsOpen(true);
            }}
          />
        </Flex>
      </Box>
    </Float>
  );
};
