import { Box, Button, Flex, Float, Image,} from "@chakra-ui/react"
import { FileUploadForm } from "./components/File-Upload/File-Upload"
import tableFrame from '../public/TablerFrame.svg'
import penguin from "#public/penguin.png"
import { Tooltip } from "./components/Tooltip/Tooltip"
import { FramesDrawer } from "./components/FramesDrawer/FramesDrawer"
import { useMainContext } from "./context/useMainContext"
import { ImageLoader } from "./components/ImageLoader/ImageLoader"

function App() {
  const {useFramesDrawer} = useMainContext()


  return (
    <Box
    bgColor={"colorPalette.solid"}
    h={"full"}
    w={"full"}
    >
      <Flex w={"full"} h={"full"} justifyContent={"center"} alignItems={"center"} >
      {/* <FileUploadForm/> */}
      <Box w={{
        base: "100%",
        md: "50%",
        lg: "40%",
      }}
      
      h={{
        base: "100%",
        md: "50%",
        lg: "40%",
      }}
      borderRadius={"10px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      >
        
        <ImageLoader imageUrl={penguin} />
      </Box>

    
    <Float zIndex={10000} asChild placement={"bottom-center"} offsetY={10 } >
      <Box
        bgColor={"whiteAlpha.950"}
        w={"400px"}
        h={"55px"}
        borderRadius={"10px"}
        p={1}
      
        >
          <Flex w={"full"} h={"full"} justifyContent={"left"} alignItems={"start"}> 
          <Tooltip content="Frames">
            <Button onClick={() => useFramesDrawer.setIsOpen(true)} bgColor={"transparent"} h={"full"} p={0}  _hover={{ bgColor: "blackAlpha.400" }} >
              <Image src={tableFrame} objectFit={"contain"} alt={"table frame"} p={2} h={"100%"} />
            </Button>
            </Tooltip>
          </Flex>

        </Box>
    </Float>

      </Flex>

   <FramesDrawer/> 

    </Box> 
  )
}

export default App
