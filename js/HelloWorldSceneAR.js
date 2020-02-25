'use strict';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ViroARScene, ViroConstants, ViroText, } from 'react-viro';

export default class HelloWorldSceneAR extends Component {
    state = {
        text: "Starting AR"
    };

    loadScene = (state, reason) => {
        state === ViroConstants.TRACKING_NORMAL
            ? this.setState({ text: "Sup man" })
            : this.setState({ text: "Losing Tracking" });
    };

    render() {
        const { text } = this.state;

        return (
            <ViroARScene onTrackingUpdated={this.loadScene}>
                <ViroText
                    text={text}
                    scale={[.5, .5, .5]}
                    position={[0, 0, -1]}
                    style={styles.helloWorldTextStyle}
                />
            </ViroARScene>
        );
    }
}

const styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});

module.exports = HelloWorldSceneAR;
