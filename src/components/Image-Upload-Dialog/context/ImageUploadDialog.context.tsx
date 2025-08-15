import type React from "react";
import { createContext } from "react";
import { useImageUploadDialog } from "../hook/useImageUploadDialog";

export interface imageUploadContextInterface {
  _useImageUploadDialog: ReturnType<typeof useImageUploadDialog>;
}

const ImageUploadContext = createContext<imageUploadContextInterface | null>(
  null
);

const ImageUploadProvider = ({ children }: { children?: React.ReactNode }) => {
  const _useImageUploadDialog = useImageUploadDialog();

  return (
    <ImageUploadContext.Provider
      value={{
        _useImageUploadDialog: _useImageUploadDialog,
      }}
    >
      {children}
    </ImageUploadContext.Provider>
  );
};

export { ImageUploadContext, ImageUploadProvider };
