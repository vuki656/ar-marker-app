import React from "react";
import { ViroARSceneNavigator } from 'react-viro';
import { Image, View } from "react-native"

import { Button } from "./components/buttons/Button"
import { ArSceneButton } from "./components/buttons/ARSceneButton"
import { MigosMarker } from "./js/markers/MigosMarker"
import { makeFirstLetterUppercase } from "./helpers/global"
import { Global, Pages, Wrappers } from "./styles/"

export const Home = () => {
    const [ screen, changeScreen ] = React.useState("home");

    const handleRender = (selectedScreen) => {
        if (selectedScreen === "home") {
            return (
                <View style={Pages.home}>
                    <Image
                        style={Global.logo}
                        source={require('./media/phi-logo.png')}
                    />
                    {[ "glitch", "sound" ].map(buttonText =>
                        <Button
                            handlePress={() => changeScreen(buttonText)}
                            buttonText={makeFirstLetterUppercase(buttonText)}
                            key={buttonText}
                        />,
                    )}
                </View>
            );
        } else {
            return (
                <View style={Wrappers.scene}>
                    <ViroARSceneNavigator
                        initialScene={{ scene: MigosMarker }}
                        viroAppProps={{}}
                    />
                    <ArSceneButton
                        handlePress={() => changeScreen("home")}
                        buttonText="Back"
                    />
                </View>
            )
        }
    };

    return (handleRender(screen))
};

