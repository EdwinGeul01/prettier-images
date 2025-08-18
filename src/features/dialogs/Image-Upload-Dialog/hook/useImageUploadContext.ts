import { useContext } from "react";
import { ImageUploadContext } from "../context/ImageUploadDialog.context";

export const useImageUploadContext = () => {
  const context = useContext(ImageUploadContext);
  if (!context) {
    throw new Error("useMainContext must be used within a MainContextProvider");
  }
  return context;
};
