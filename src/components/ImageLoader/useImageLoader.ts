import type Konva from "konva";
import { useEffect, useRef, useState } from "react";
import useImageProperties from "../../hook/useOptions";
import useStoreImageOptions from "../../hook/useOptionsImage";

export const useImageLoader = (imageUrl: string) => {
  const { TypeFrame } = useImageProperties();
  const { setOptionValues, backgroundSize, Background } =
    useStoreImageOptions();

  const stageRef = useRef<Konva.Stage | null>(null);
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

    setOptionValues({
      ImageRef: imageRef,
    });

    setOptionValues({
      Stage: stageRef,
    });

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [imageUrl]);

  useEffect(() => {
    RefSpecialkeyState.current = speacialKeyStates;
  }, [speacialKeyStates]);

  useEffect(() => {
    RefScale.current = Scale;
  }, [Scale]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === " ") {
      event.preventDefault();
      setSpeacialKeyStates((prev) => ({
        ...prev,
        space: true,
      }));
    }
    if (event.key === "Control" || event.key === "Meta") {
      event.preventDefault();
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

  return {
    imageHeight,
    imageWidth,
    imagePositionX,
    imagePositionY,
    borderSize,
    images,
    imageRef,
    imagePos,
    setimagePos,
    speacialKeyStates,
    Scale,
    stageRef,
    TypeFrame,
    Background,
    backgroundSize,
  };
};
