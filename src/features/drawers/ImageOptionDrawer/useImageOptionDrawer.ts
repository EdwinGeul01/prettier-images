import React from "react";

export const useImageOptionDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return {
    isOpen,
    setIsOpen,
  };
};
