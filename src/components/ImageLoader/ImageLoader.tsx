import { Box } from "@chakra-ui/react";
import React from "react";
import { Group, Image, Layer, Stage } from "react-konva";
import { useImageLoader } from "./useImageLoader";

interface ImageLoaderProps {
  imageUrl: string;
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({ imageUrl }) => {
  const {
    speacialKeyStates,
    imageRef,
    Scale,
    stageRef,
    imageWidth,
    imageHeight,
    setimagePos,
    images,
    imagePos,
    borderSize,
    TypeFrame,
    backgroundSize,
    Background,
  } = useImageLoader(imageUrl);

  return (
    <Box h={"full"} boxSizing={"content-box"} overflow={"hidden"}>
      <Box
        h={"full"}
        borderRadius={"10px"}
        overflow={"hidden"}
        zIndex={1000}
        cursor={speacialKeyStates.space ? "grabbing" : "default"}
      >
        <Stage
          ref={stageRef}
          width={window.innerWidth}
          height={window.innerHeight}
          draggable={speacialKeyStates.space}
          scale={Scale}
        >
          <Layer name="image-layer">
            <Group draggable={!speacialKeyStates.space}>
              {Background && (
                <Background
                  x={(imageRef.current?.x() ?? 0) - backgroundSize}
                  y={(imageRef.current?.y() ?? 0) - backgroundSize}
                  width={imageRef.current?.getWidth() + backgroundSize * 2}
                  height={imageRef.current?.getHeight() + backgroundSize * 2}
                  fill={"black"}
                  fillPriority="linear-gradient" // 'color', 'pattern', 'linear-gradient', 'radial-gradient'
                  /* linear-gradient */
                  fillLinearGradientStartPoint={{
                    x: (imageRef.current?.x() ?? 0) - backgroundSize,
                    y: (imageRef.current?.y() ?? 0) - backgroundSize,
                  }}
                  fillLinearGradientEndPoint={{
                    x:
                      (imageRef.current?.x() ?? 0) +
                      imageRef.current?.getWidth() +
                      backgroundSize,
                    y:
                      (imageRef.current?.y() ?? 0) +
                      imageRef.current?.getHeight() +
                      backgroundSize,
                  }}
                />
              )}
              <Image
                ref={imageRef}
                image={images!}
                scale={{ x: 1, y: 1 }}
                width={imageWidth}
                height={imageHeight}
                onDragMove={(e) => {
                  const pos = e.target.position();
                  setimagePos({ x: pos.x, y: pos.y });
                }}
              />
              {TypeFrame && (
                <TypeFrame
                  x={imagePos.x - borderSize}
                  y={imagePos.y - borderSize}
                  width={imageRef.current?.getWidth() + borderSize * 2}
                  height={imageRef.current?.getHeight() + borderSize * 2}
                  stroke="red" // Border color
                  strokeWidth={borderSize}
                />
              )}
            </Group>
          </Layer>
        </Stage>
      </Box>
    </Box>
  );
};
