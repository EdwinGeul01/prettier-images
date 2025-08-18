import React from "react";

export const useBackgroundDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return {
    isOpen,
    setIsOpen,
  };
};
