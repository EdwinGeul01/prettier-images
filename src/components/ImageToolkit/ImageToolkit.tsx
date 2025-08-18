import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import { ImageLoader } from "../ImageLoader/ImageLoader";
import useStoreImageOptions from "../../hook/useOptionsImage";

// Rectángulo
export const ImageToolkit = () => {
  const layourImageToolkit = useRef<HTMLDivElement | null>(null);

  const { ImageUrl } = useStoreImageOptions();

  if (!ImageUrl) {
    return null;
  }

  return (
    <Box
      ref={layourImageToolkit}
      h={{
        base: "100%",
        md: "50%",
        lg: "100%",
      }}
      borderRadius={"10px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <ImageLoader imageUrl={ImageUrl} />
    </Box>
  );
};
