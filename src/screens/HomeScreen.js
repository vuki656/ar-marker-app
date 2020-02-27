import React from "react";
import { Image, View } from "react-native"

import { Button } from "../components/buttons/Button"
import { makeFirstLetterUppercase } from "../helpers/global"
import { Global, Pages } from "../styles/"

export const HomeScreen = (props) => {
    const { changeScreen } = props

    return (
        <View style={Pages.home}>
            <Image
                style={Global.logo}
                source={require('../media/phi-logo.png')}
            />
            {[ "glitch", "sound" ].map(buttonText =>
                <Button
                    handlePress={() => changeScreen(buttonText)}
                    buttonText={makeFirstLetterUppercase(buttonText)}
                    key={buttonText}
                />,
            )}
        </View>
    )
};

