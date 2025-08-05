import penguin from "#public/penguin.png";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { ImageLoader } from "../ImageLoader/ImageLoader";

export const ImageToolkit = () => {
  const layourImageToolkit = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!layourImageToolkit.current) return;
    let ControlKeyPressed = false;
    let spaceKeyPressed = false;
    const handleCtrl = (event: KeyboardEvent) => {
      if (event.key == "Control") {
        // Add functionality for Control key if needed
        ControlKeyPressed = true;
      }
    };

    const handleSpace = (event: KeyboardEvent) => {
      if (event.key == " ") {
        // Add functionality for space key if needed
        spaceKeyPressed = true;
      }
    };

    const handleScroll = (event: WheelEvent) => {
      if (!layourImageToolkit.current) return;
      if (event.deltaY <= 0 && ControlKeyPressed) {
        console.log("scrolling");
        layourImageToolkit.current.style.scale =
          Number(layourImageToolkit.current.style.scale || 1) - 0.1 + "";
      }
      if (event.deltaY >= 0 && ControlKeyPressed) {
        console.log("scrolling");
        layourImageToolkit.current.style.scale =
          Number(layourImageToolkit.current.style.scale || 1) + 0.1 + "";
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      if (event.movementX > 0 && spaceKeyPressed) {
        layourImageToolkit.current!.style.transform = `translateX(10px)`;
      }
    };

    window!.addEventListener("keydown", handleCtrl);
    window!.addEventListener("keydown", handleSpace);
    window!.addEventListener("mousemove", handleMouseDown);
    window!.addEventListener("wheel", handleScroll);

    return () => {
      if (!window) return;
      window!.removeEventListener("keydown", handleCtrl);
      window!.removeEventListener("keydown", handleSpace);
      window!.addEventListener("mousemove", handleMouseDown);
      window!.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <Box
      ref={layourImageToolkit}
      w={{
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
  );
};
