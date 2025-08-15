import { Box, Button, Flex, Float, Image } from "@chakra-ui/react";
import tableFrame from "#public/TablerFrame.svg";
import githubLogo from "#public/github.svg";
import { FramesDrawer } from "./components/FramesDrawer/FramesDrawer";
import { Tooltip } from "./components/Tooltip/Tooltip";
import { useMainContext } from "./context/useMainContext";
import { ImageToolkit } from "./components/ImageToolkit/ImageToolkit";
import { ImageUploadButton } from "./components/Image-Upload-Dialog/ImageUploadButton";
import { ImageUploadProvider } from "./components/Image-Upload-Dialog/context/ImageUploadDialog.context";

function App() {
  const { useFramesDrawer } = useMainContext();

  return (
    <Box overflow={"hidden"} bgColor={"#E8E8E8"} h={"full"} w={"full"}>
      <Flex w={"full"} h={"full"} justifyContent={"center"} alignItems={"cter"}>
        {/* <FileUploadForm/> */}
        <ImageToolkit />
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
            </Flex>
          </Box>
        </Float>
        <Float
          zIndex={10000}
          asChild
          ml={50}
          placement={"bottom-start"}
          offsetY={10}
        >
          <Box w={"70px"} h={"55px"} p={1}>
            <a href="https://github.com/EdwinGeul01/prettier-images">
              <Image
                src={githubLogo}
                w={"full"}
                h={"full"}
                p={3}
                objectFit={"contain"}
                alt={"github logo"}
                _hover={{
                  filter: "brightness(0.4)",
                }}
              ></Image>
            </a>
          </Box>
        </Float>
        <ImageUploadProvider>
          <ImageUploadButton />
        </ImageUploadProvider>
      </Flex>

      <FramesDrawer />
    </Box>
  );
}

export default App;
