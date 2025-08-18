import { Box, Flex } from "@chakra-ui/react";
import { FileUploadForm } from "./components/File-Upload/File-Upload";
import { FramesDrawer } from "./components/FramesDrawer/FramesDrawer";
import { GithubReference } from "./components/GithubReference/GithubReference";
import { ImageUploadButton } from "./components/Image-Upload-Dialog/ImageUploadButton";
import { ImageUploadProvider } from "./components/Image-Upload-Dialog/context/ImageUploadDialog.context";
import { ImageToolkit } from "./components/ImageToolkit/ImageToolkit";
import { OptionsBar } from "./components/OptionsBar/OptionsBar";
import { SaveImageButton } from "./components/SaveImageButton/SaveImageButton";
import useStoreImageOptions from "./hook/useOptionsImage";
import { BackgroundDrawer } from "./components/BackgroundDrawer/BackgroundDrawer";

function App() {
  const { ImageUrl } = useStoreImageOptions();
  return (
    <Box overflow={"hidden"} bgColor={"#E8E8E8"} h={"full"} w={"full"}>
      <Flex
        w={"full"}
        h={"full"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {!ImageUrl && <FileUploadForm />}
        <ImageToolkit />
        <OptionsBar />
        <GithubReference />
        <SaveImageButton />
        <ImageUploadProvider>
          <ImageUploadButton />
        </ImageUploadProvider>
      </Flex>

      <FramesDrawer />
      <BackgroundDrawer />
    </Box>
  );
}

export default App;
