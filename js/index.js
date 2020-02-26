import React from "react";
import { ViroARSceneNavigator } from 'react-viro';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import ShirtMarker from "./markers/ShirtMarker";

export const Index = () => {
    const [ screen, changeScreen ] = React.useState("home");

    const handleRender = (selectedScreen) => {
        if (selectedScreen === "home") {
            return (
                <View style={styles.wrapper}>
                    <TouchableOpacity
                        onPress={() => changeScreen("glitch")}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Video Glitch</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => changeScreen("sea")}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Sea Cartoon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => changeScreen("smiley")}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Smiley</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => changeScreen("sound")}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Sound Waves</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return <ViroARSceneNavigator
                initialScene={{ scene: ShirtMarker }}
                viroAppProps={{ videoName: screen }}
            />
        }
    };

    return (handleRender(screen))
};


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    button: {
        padding: 20,
        marginBottom: 20,
        backgroundColor: "#6DC9F7",
        borderRadius: 7,
        color: "white",

        // iOS Box Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        // Android Box Shadow
        elevation: 6,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        letterSpacing: 0.9,
    }
});

