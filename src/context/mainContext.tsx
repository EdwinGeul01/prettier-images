import React from "react";
import { useFramesDrawer } from "../features/drawers/FramesDrawer/useFramesDrawer";
import { useBackgroundDrawer } from "../features/drawers/BackgroundDrawer/useBackgroundDrawer";
import { useImageOptionDrawer } from "../features/drawers/ImageOptionDrawer/useImageOptionDrawer";

interface MainContextProps {
  useFramesDrawer: ReturnType<typeof useFramesDrawer>;
  useBackgrounDrawer: ReturnType<typeof useBackgroundDrawer>;
  useImageOptionDrawer: ReturnType<typeof useImageOptionDrawer>;
}

const MainContext = React.createContext<MainContextProps | null>(null);

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const _useFramesDrawer = useFramesDrawer();
  const _useBackgroundDrawer = useBackgroundDrawer();
  const _useImageOptionDrawer = useImageOptionDrawer();

  return (
    <MainContext.Provider
      value={{
        useFramesDrawer: _useFramesDrawer,
        useBackgrounDrawer: _useBackgroundDrawer,
        useImageOptionDrawer: _useImageOptionDrawer,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
