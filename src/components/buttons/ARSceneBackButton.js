import React from "react";
import { View } from "react-native"

import { Button } from "./Button"
import { Wrappers } from "../../styles/"

export const ARSceneBackButton = (props) => {
    const { handlePress, buttonText } = props

    return (
        <View style={Wrappers.arButton}>
            <Button handlePress={handlePress} buttonText={buttonText} />
        </View>
    )
}
