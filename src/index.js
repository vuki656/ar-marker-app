import React from "react";

import { HomeScreen } from "./screens/HomeScreen"
import { ARSceneScreen } from "./screens/ARSceneScreen"

export const Index = () => {
    const [ selectedScreen, changeScreen ] = React.useState("home");

    const handleRender = (selectedScreen) => {
        return selectedScreen === "home"
            ? <HomeScreen changeScreen={changeScreen} />
            : <ARSceneScreen changeScreen={changeScreen} selectedScreen={selectedScreen}/>
    }

    return (handleRender(selectedScreen))
}
