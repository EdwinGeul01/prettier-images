import React from "react";
import { useFramesDrawer } from "../features/drawers/FramesDrawer/useFramesDrawer";
import { useBackgroundDrawer } from "../features/drawers/BackgroundDrawer/useBackgroundDrawer";

interface MainContextProps {
  useFramesDrawer: ReturnType<typeof useFramesDrawer>;
  useBackgrounDrawer: ReturnType<typeof useBackgroundDrawer>;
}

const MainContext = React.createContext<MainContextProps | null>(null);

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const _useFramesDrawer = useFramesDrawer();
  const _useBackgroundDrawer = useBackgroundDrawer();

  return (
    <MainContext.Provider
      value={{
        useFramesDrawer: _useFramesDrawer,
        useBackgrounDrawer: _useBackgroundDrawer,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
