import React from "react";
import { ViroARSceneNavigator } from 'react-viro';
import { Image, StyleSheet, View } from "react-native"

import { Button } from "./components/buttons/Button"
import { ArSceneButton } from "./components/buttons/ARSceneButton"
import { MigosMarker } from "./js/markers/MigosMarker"

export const Home = () => {
    const [ screen, changeScreen ] = React.useState("home");

    const handleRender = (selectedScreen) => {
        if (selectedScreen === "home") {
            return (
                <View style={styles.wrapper}>
                    <Image
                        style={styles.logo}
                        source={require('./media/phi-logo.png')}
                    />
                    <Button
                        handlePress={() => changeScreen("glitch")}
                        buttonText="Video Glitch"
                    />
                    <Button
                        handlePress={() => changeScreen("sound")}
                        buttonText="Sound Waves"
                    />
                </View>
            );
        } else {
            return (
                <View style={styles.scene}>
                    <ViroARSceneNavigator
                        initialScene={{ scene: MigosMarker }}
                        // viroAppProps={{ videoName: screen }}
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

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        flexDirection: 'column',
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: "center",
        backgroundColor: "white",
    },
    logo: {
        width: 400,
        height: 80,
        marginBottom: 100,
    },
});

