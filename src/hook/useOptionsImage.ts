import type { Stage } from "konva/lib/Stage";
import { create } from "zustand";

type OptionsImage = {
  Stage: React.RefObject<Stage | null> | null;
  ImageUrl: string | null;
  backgroundSize: number;
  setOptionValues: (values: Partial<OptionsImage>) => void;
};

const useStoreImageOptions = create<OptionsImage>((set) => ({
  Stage: null,
  ImageUrl: null,
  backgroundSize: 100,
  setOptionValues: (values) => {
    set((prev) => ({
      ...prev,
      ...values,
    }));
  },
}));

export default useStoreImageOptions;
