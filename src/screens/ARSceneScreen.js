import React from "react";
import { ViroARSceneNavigator } from 'react-viro';
import { View } from "react-native"

import { Wrappers } from "../styles/"
import { ARSceneBackButton } from "../components/buttons/ARSceneBackButton"
import { ShirtMarker } from "../js/markers/ShirtMarker"

export const ARSceneScreen = (props) => {
    const { changeScreen, selectedScreen } = props

    return (
        <View style={Wrappers.scene}>
            <ViroARSceneNavigator
                initialScene={{ scene: ShirtMarker }}
                viroAppProps={{ selectedScreen: selectedScreen }}
            />
            <ARSceneBackButton
                handlePress={() => changeScreen("home")}
                buttonText="Back"
            />
        </View>
    )
};

