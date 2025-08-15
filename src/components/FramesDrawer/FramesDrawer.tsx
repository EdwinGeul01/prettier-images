import {
  Button,
  CloseButton,
  Drawer,
  Grid,
  Portal,
  SegmentGroup,
  Text,
} from "@chakra-ui/react";
import { FrameCard } from "./components/FrameCard";
import { useMainContext } from "../../context/useMainContext";
import { BlueFrame } from "./frames/BlueFrame";
import { NoFrame } from "./frames/NoFrame";
import { macOsFrame } from "./frames/macosFrame";
import { macOsFrameBlack } from "./frames/macosFrameBlack";
import { LinuxFrame } from "./frames/LinuxFrame";

export const FramesDrawer = () => {
  const { useFramesDrawer } = useMainContext();
  const { isOpen, setIsOpen } = useFramesDrawer;

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
          <Drawer.Content borderRadius={"10px"} boxShadow={"dark-lg"}>
            <Drawer.Header>
              <Text>Frames</Text>
            </Drawer.Header>
            <Drawer.Body>
              <SegmentGroup.Root defaultValue="Frames">
                <SegmentGroup.Indicator />
                <SegmentGroup.Items items={["Frames"]} />
              </SegmentGroup.Root>
              <Grid templateColumns={"repeat(2, 1fr)"} gap={4} mt={4}>
                <FrameCard name="No Frame" FrameType={NoFrame} />
                <FrameCard name="Blue Frame" FrameType={BlueFrame} />
                <FrameCard name="MacOs Frame" FrameType={macOsFrame} />
                <FrameCard
                  name="MacOs Frame Black"
                  FrameType={macOsFrameBlack}
                />
                <FrameCard
                  name="linux frame"
                  FrameType={LinuxFrame}
                />
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
