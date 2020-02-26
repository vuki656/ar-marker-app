import React from "react";
import { ViroARSceneNavigator } from 'react-viro';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import ShirtMarker from "./markers/ShirtMarker";

export const Index = () => {
    const [ screen, changeScreen ] = React.useState("home");

    const handleRender = (selectedScreen) => {
        if (selectedScreen === "home") {
            return (
                <View style={styles.wrapper}>
                    <Image
                        style={styles.logo}
                        source={require('./media/phi-logo.png')}
                    />
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
            return (
                <View style={styles.scene}>
                    <ViroARSceneNavigator
                        initialScene={{ scene: ShirtMarker }}
                        viroAppProps={{ videoName: screen }}
                    />
                    <View style={styles.arBackButton}>
                        <TouchableOpacity style={styles.button} onPress={() => changeScreen("home")}>
                            <Text style={styles.buttonText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    };

    return (handleRender(screen))
};

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        flexDirection: 'column'
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
        marginBottom: 100
    },
    button: {
        padding: 20,
        marginBottom: 20,
        backgroundColor: "#0089f8",
        borderRadius: 7,
        color: "white",
        width: "70%",

        // iOS Box Shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3, },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        // Android Box Shadow
        elevation: 6,
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        letterSpacing: 0.9,
    },
    arBackButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 50,
        alignItems: 'center'
    }
});

