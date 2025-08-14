import { Box } from "@chakra-ui/react";
import type Konva from "konva";
import React, { useEffect, useRef, useState } from "react";
import { Group, Image, Layer, Stage, Text } from "react-konva";
import useStoreOptions from "../../hook/useOptions";

interface ImageLoaderProps {
  imageUrl: string;
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({ imageUrl }) => {
  const { TypeFrame } = useStoreOptions();

  const [images, setimages] = useState<HTMLImageElement | null>(null);
  const [imagePos, setimagePos] = useState({ x: 0, y: 0 });
  const [Scale, setScale] = useState({ x: 1, y: 1 });
  const [speacialKeyStates, setSpeacialKeyStates] = useState({
    control: false,
    meta: false,
    space: false,
  });
  const imageRef = useRef<Konva.Image | null>(null);
  const RefSpecialkeyState = useRef(speacialKeyStates);
  const RefScale = useRef(Scale);

  useEffect(() => {
    const img = new window.Image();
    img.src = imageUrl;
    img.onload = () => {
      setimages(img);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    RefSpecialkeyState.current = speacialKeyStates;
  }, [speacialKeyStates]);

  useEffect(() => {
    RefScale.current = Scale;
  }, [Scale]);

  const handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();
    if (event.key === " ") {
      setSpeacialKeyStates((prev) => ({
        ...prev,
        space: true,
      }));
    }
    if (event.key === "Control" || event.key === "Meta") {
      setSpeacialKeyStates((prev) => ({
        ...prev,
        control: true,
      }));
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === " ") {
      setSpeacialKeyStates((prev) => ({
        ...prev,
        space: false,
      }));
    }
    if (event.key == "Control" || event.key == "Meta") {
      setSpeacialKeyStates((prev) => ({
        ...prev,
        control: false,
        meta: false,
      }));
    }
  };

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();

    if (RefSpecialkeyState.current.control) {
      if (event.deltaY <= -1) {
        if (RefScale.current.x >= 5.5) return;
        setScale((prev) => ({
          x: prev.x * 1.1,
          y: prev.y * 1.1,
        }));
      }

      if (event.deltaY >= 1) {
        if (RefScale.current.x <= 0.05) return;
        setScale((prev) => ({
          x: prev.x * 0.9,
          y: prev.y * 0.9,
        }));
      }
    }
  };

  const imageWidth = images?.width ?? 0;
  const imageHeight = images?.height ?? 0;
  const imagePositionX = window.innerWidth / 2 - (images?.width || 0) / 2;
  const imagePositionY = window.innerHeight / 2 - (images?.height || 0) / 2;
  const borderSize = 2;

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
          width={window.innerWidth}
          height={window.innerHeight}
          draggable={speacialKeyStates.space}
          scale={Scale}
        >
          <Layer>
            <Text
              text="Drag the image around"
              x={imagePositionX}
              y={imagePositionY}
              fontSize={20}
              fill={"white"}
            ></Text>

            <Group draggable={!speacialKeyStates.space}>
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
