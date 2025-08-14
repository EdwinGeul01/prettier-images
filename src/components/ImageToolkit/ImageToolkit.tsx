import penguin from "#public/penguin.png";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import { ImageLoader } from "../ImageLoader/ImageLoader";

// Rectángulo
export const ImageToolkit = () => {
  const layourImageToolkit = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      ref={layourImageToolkit}
      h={{
        base: "100%",
        md: "50%",
        lg: "90%",
      }}
      borderRadius={"10px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <ImageLoader imageUrl={penguin} />
    </Box>
  );
};
