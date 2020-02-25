import React from "react";
import { ViroARSceneNavigator } from 'react-viro';

import { ShirtMarker } from "./markers/ShirtMarker";

export const Index = () => {
    return (
        <ViroARSceneNavigator initialScene={{ scene: ShirtMarker }} />
    )
};
