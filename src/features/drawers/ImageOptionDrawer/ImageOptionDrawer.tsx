import {
  Box,
  Button,
  CloseButton,
  Drawer,
  Grid,
  Input,
  Portal,
  Text,
} from "@chakra-ui/react";
import { useMainContext } from "../../../context/useMainContext";
import useStoreImageOptions from "../../../hook/useOptionsImage";

export const ImageOptionDrawer = () => {
  const { ImageRef } = useStoreImageOptions();
  const { useImageOptionDrawer } = useMainContext();
  const { isOpen, setIsOpen } = useImageOptionDrawer;

  return (
    <Drawer.Root
      onEscapeKeyDown={() => {
        setIsOpen(false);
      }}
      onInteractOutside={() => {
        setIsOpen(false);
      }}
      size={"lg"}
      open={isOpen}
    >
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            borderRadius={"10px"}
            boxShadow={"dark-lg"}
            zIndex={40000}
          >
            <Drawer.Header>
              <Text>Image Options</Text>
            </Drawer.Header>
            <Drawer.Body>
              <Grid templateColumns={"repeat(2, 1fr)"} gap={4} mt={4}>
                <Box>
                  <Text fontSize={"sm"}>Width</Text>
                  <Input
                    type="number"
                    defaultValue={ImageRef?.current?.width()}
                    onChange={(e) => {
                      const width = parseFloat(e.target.value);
                      if (ImageRef?.current && !isNaN(width)) {
                        ImageRef.current.width(width);
                      }
                    }}
                  ></Input>
                </Box>
                <Box>
                  <Text fontSize={"sm"}>Height</Text>
                  <Input
                    type="number"
                    defaultValue={ImageRef?.current?.height()}
                    onChange={(e) => {
                      const height = parseFloat(e.target.value);
                      if (ImageRef?.current && !isNaN(height)) {
                        ImageRef.current.height(height);
                      }
                    }}
                  ></Input>
                </Box>
              </Grid>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
