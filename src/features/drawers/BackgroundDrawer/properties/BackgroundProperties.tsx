import { Box, Slider, Text } from "@chakra-ui/react";
import useStoreImageOptions from "../../../../hook/useOptionsImage";

export const BackgroundProperties = () => {
  const { backgroundSize, setOptionValues } = useStoreImageOptions();

  return (
    <Box mt={10} gridColumn={"span 2"}>
      <Text mb={2}>Background Size</Text>
      <Slider.Root
        width="100%"
        onValueChange={(e) => {
          setOptionValues({ backgroundSize: e.value[0] });
        }}
        defaultValue={[backgroundSize]}
      >
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
    </Box>
  );
};
