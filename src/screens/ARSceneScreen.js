import React from "react";
import { ViroARSceneNavigator } from 'react-viro';
import { View } from "react-native"

import { Wrappers } from "../styles/"
import { MigosMarker } from "../js/markers/MigosMarker"
import { ARSceneBackButton } from "../components/buttons/ARSceneBackButton"

export const ARSceneScreen = (props) => {
    const { changeScreen } = props

    return (
        <View style={Wrappers.scene}>
            <ViroARSceneNavigator
                initialScene={{ scene: MigosMarker }}
                viroAppProps={{}}
            />
            <ARSceneBackButton
                handlePress={() => changeScreen("home")}
                buttonText="Back"
            />
        </View>
    )
};

