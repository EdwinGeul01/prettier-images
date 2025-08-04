import React from "react";
import  { useFramesDrawer } from "../components/FramesDrawer/useFramesDrawer";

interface MainContextProps {
    useFramesDrawer : ReturnType<typeof useFramesDrawer>;
} 

 const MainContext = React.createContext<MainContextProps | null>(null);



 const MainContextProvider = ({children}: {children: React.ReactNode}) => {
    const _useFramesDrawer = useFramesDrawer();

    return (
        <MainContext.Provider value={{useFramesDrawer: _useFramesDrawer}}>
        {children}
        </MainContext.Provider>
    )
}


export { MainContext, MainContextProvider };