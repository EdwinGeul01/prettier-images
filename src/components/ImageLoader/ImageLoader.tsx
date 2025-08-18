import { Box } from "@chakra-ui/react";
import type Konva from "konva";
import React, { useEffect, useRef, useState } from "react";
import { Group, Image, Layer, Rect, Stage } from "react-konva";
import useImageProperties from "../../hook/useOptions";
import useStoreImageOptions from "../../hook/useOptionsImage";
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
              <Rect
                x={(imageRef.current?.x() ?? 0) - backgroundSize}
                y={(imageRef.current?.y() ?? 0) - backgroundSize}
                width={imageWidth + backgroundSize * 2}
                height={imageHeight + backgroundSize * 2}
                fill={"black"}
                fillPriority="linear-gradient" // 'color', 'pattern', 'linear-gradient', 'radial-gradient'
                /* linear-gradient */
                fillLinearGradientStartPoint={{
                  x: (imageRef.current?.x() ?? 0) - backgroundSize,
                  y: (imageRef.current?.y() ?? 0) - backgroundSize,
                }}
                fillLinearGradientEndPoint={{
                  x: (imageRef.current?.x() ?? 0) + imageWidth + backgroundSize,
                  y:
                    (imageRef.current?.y() ?? 0) + imageHeight + backgroundSize,
                }}
                fillLinearGradientColorStops={[0, "#F54927", 1, "#9C27F5"]}
              />

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
                  width={imageWidth + borderSize * 2}
                  height={imageHeight + borderSize * 2}
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
