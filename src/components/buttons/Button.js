import React from "react";
import { Text, TouchableOpacity } from "react-native"

import { Buttons, Typography } from "../../styles"

export const Button = (props) => {
    const { handlePress, buttonText } = props

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={Buttons.buttonPrimary}
        >
            <Text style={Typography.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}
