import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const Button = (props) => {
    const { handlePress, buttonText } = props

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={styles.button}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
});
