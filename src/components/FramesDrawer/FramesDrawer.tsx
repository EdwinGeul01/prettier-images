import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  SegmentGroup,
  Text,
} from "@chakra-ui/react";
import { FrameCard } from "./components/FrameCard";
import { useMainContext } from "../../context/useMainContext";

export const FramesDrawer = () => {
  const { useFramesDrawer } = useMainContext();
  const { isOpen, setIsOpen } = useFramesDrawer;

  return (
    <Drawer.Root size={"lg"} open={isOpen}>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content borderRadius={"10px"} boxShadow={"dark-lg"}>
            <Drawer.Header>
              <Text>Frames</Text>
            </Drawer.Header>
            <Drawer.Body>
              <SegmentGroup.Root defaultValue="Frames">
                <SegmentGroup.Indicator />
                <SegmentGroup.Items items={["Frames", "Options"]} />
              </SegmentGroup.Root>
              <FrameCard />
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
