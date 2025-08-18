import { Box, Flex } from "@chakra-ui/react";
import { FileUploadForm } from "./components/File-Upload/File-Upload";
import { GithubReference } from "./components/GithubReference/GithubReference";
import { ImageToolkit } from "./components/ImageToolkit/ImageToolkit";
import { SaveImageButton } from "./components/SaveImageButton/SaveImageButton";
import { BackgroundDrawer } from "./features/drawers/BackgroundDrawer/BackgroundDrawer";
import { FramesDrawer } from "./features/drawers/FramesDrawer/FramesDrawer";
import useStoreImageOptions from "./hook/useOptionsImage";
import { OptionsBar } from "./features/OptionsBar/OptionsBar";
import { ImageUploadProvider } from "./features/dialogs/Image-Upload-Dialog/context/ImageUploadDialog.context";
import { ImageUploadButton } from "./features/dialogs/Image-Upload-Dialog/ImageUploadButton";

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
