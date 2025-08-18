import {
  Box,
  FileUpload,
  Image as ChakraImage,
  type FileUploadFileChangeDetails,
} from "@chakra-ui/react";
import dragnAndDropIco from "#public/drag-and-drop.png";
import useStoreImageOptions from "../../hook/useOptionsImage";

export const FileUploadForm = () => {
  const { ImageUrl, setOptionValues } = useStoreImageOptions();

  const handleChangeImage = (fileChange: FileUploadFileChangeDetails) => {
    fileChange.acceptedFiles.forEach((file) => {
      const image = new Image();
      image.src = URL.createObjectURL(file);
      setOptionValues({
        ImageUrl: image.src,
      });
    });
  };

  return (
    <FileUpload.Root
      maxW="xl"
      alignItems="stretch"
      maxFiles={1}
      onFileChange={handleChangeImage}
      _hover={{
        cursor: "pointer",
      }}
    >
      <FileUpload.HiddenInput />
      <FileUpload.Dropzone bgColor={"transparent"}>
        <FileUpload.DropzoneContent>
          <Box>
            <ChakraImage
              src={dragnAndDropIco}
              alt="Drag and drop icon"
              w="1000px"
              h="1000%"
              objectFit="contain"
            />
          </Box>
        </FileUpload.DropzoneContent>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload.Root>
  );
};
