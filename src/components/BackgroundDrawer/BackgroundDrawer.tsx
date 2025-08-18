import {
  Button,
  CloseButton,
  Drawer,
  Grid,
  Portal,
  SegmentGroup,
  Text,
} from "@chakra-ui/react";
import { useMainContext } from "../../context/useMainContext";
import { BackgroundProperties } from "./properties/BackgroundProperties";

export const BackgroundDrawer = () => {
  const { useBackgrounDrawer } = useMainContext();
  const { isOpen, setIsOpen } = useBackgrounDrawer;

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
              <Text>Backgrounds</Text>
            </Drawer.Header>
            <Drawer.Body>
              <SegmentGroup.Root defaultValue="Backgrounds">
                <SegmentGroup.Indicator />
                <SegmentGroup.Items items={["Backgrounds", "Properties"]} />
              </SegmentGroup.Root>
              <Grid templateColumns={"repeat(1, 1fr)"} gap={4} mt={4}>
                <BackgroundProperties  />
              </Grid>

              <Grid templateColumns={"repeat(2, 1fr)"} gap={4} mt={4}></Grid>
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
