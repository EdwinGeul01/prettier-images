import type { Image } from "konva/lib/shapes/Image";
import type { Stage } from "konva/lib/Stage";
import type { Rect } from "react-konva";
import { create } from "zustand";

type OptionsImage = {
  Stage: React.RefObject<Stage | null> | null;
  ImageUrl: string | null;
  backgroundSize: number;
  ImageRef: React.RefObject<Image | null> | null;
  Background: React.ElementType<React.ComponentProps<typeof Rect>> | null;
  setOptionValues: (values: Partial<OptionsImage>) => void;
};

const useStoreImageOptions = create<OptionsImage>((set) => ({
  Stage: null,
  ImageUrl: null,
  backgroundSize: 100,
  Background: null,
  ImageRef: null , 
  setOptionValues: (values) => {
    set((prev) => ({
      ...prev,
      ...values,
    }));
  },
}));

export default useStoreImageOptions;
