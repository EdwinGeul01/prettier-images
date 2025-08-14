import type { Rect } from "react-konva";
import { create } from "zustand";

type frameOption = {
  TypeFrame: React.ElementType<React.ComponentProps<typeof Rect>> | null;
  setFrameType: (
    type: React.ElementType<React.ComponentProps<typeof Rect>> | null
  ) => void;
};

const useStoreOptions = create<frameOption>((set) => ({
  TypeFrame: null,
  setFrameType: (type) => set(() => ({ TypeFrame: type })),
}));

export default useStoreOptions;
