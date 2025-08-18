import type { Rect } from "react-konva";
import { create } from "zustand";

type frameOption = {
  TypeFrame: React.ElementType<React.ComponentProps<typeof Rect>> | null;
  setFrameType: (
    type: React.ElementType<React.ComponentProps<typeof Rect>> | null
  ) => void;
  // Stage: React.RefObject<Stage | null> | null;
};

const useImageProperties = create<frameOption>((set) => ({
  TypeFrame: null,
  setFrameType: (type) => set(() => ({ TypeFrame: type })),
}));

export default useImageProperties;
