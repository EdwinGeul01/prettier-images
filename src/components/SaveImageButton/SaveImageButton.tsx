import saveIco from "#public/saveIco.svg";
import { Button, Float, Image, Text } from "@chakra-ui/react";
import useStoreImageOptions from "../../hook/useOptionsImage";

export const SaveImageButton = () => {
  const { Stage } = useStoreImageOptions();

  const handleDownloadButtonClick = () => {
    if (!Stage?.current) return;

    const contentNode = Stage.current.findOne(".image-layer"); // Or a specific Layer

    if (!contentNode) {
      console.error("Content node not found.");
      return;
    }

    // Get the bounding rectangle of the content
    const contentRect = contentNode.getClientRect();

    const linkDownload = document.createElement("a");
    linkDownload.href =
      Stage.current.toDataURL({
        pixelRatio: 2,
        x: contentRect.x,
        y: contentRect.y,
        width: contentRect.width,
        height: contentRect.height,
      }) || "";
    linkDownload.download = "image.png";
    linkDownload.click();
  };

  return (
    <Float asChild placement={"top-start"} offsetY={10} ml={20}>
      <Button onClick={handleDownloadButtonClick} zIndex={1000}>
        <Image w={5} h={5} src={saveIco}></Image>
        <Text>Save Image</Text>
      </Button>
    </Float>
  );
};
