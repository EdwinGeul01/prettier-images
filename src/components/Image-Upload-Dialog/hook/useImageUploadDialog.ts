import { useState } from "react";

export const useImageUploadDialog = () => {
  const [OpenDialog, setOpenDialog] = useState(false);

  return {
    OpenDialog,
    setOpenDialog,
  };
};
