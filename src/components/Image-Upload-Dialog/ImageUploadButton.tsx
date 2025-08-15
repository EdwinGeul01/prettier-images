import uploadLogo from "#public/uploadLogo.svg";
import { Button, Float, Image } from "@chakra-ui/react";
import { ImageUploadDialog } from "./ImageUploadDialog";
import { useImageUploadContext } from "./hook/useImageUploadContext";

export const ImageUploadButton = () => {
   const {_useImageUploadDialog} = useImageUploadContext() 

  return (
    <>
      <Float zIndex={10000} asChild mr={100} placement={"top-end"} offsetY={10}>
        <Button onClick={() => _useImageUploadDialog.setOpenDialog(true)}>
          <Image src={uploadLogo} w={5} h={5} />
          Upload Image
        </Button>
      </Float>
      <ImageUploadDialog />
    </>
  );
};
