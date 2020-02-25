import React, { Component } from 'react';
import { ViroARSceneNavigator } from 'react-viro';
import ShirtAnimation from "./js/ShirtAnimation";

export default class App extends Component {
    render() {
        return (
            <ViroARSceneNavigator initialScene={{ scene: ShirtAnimation }} />
        )
    }
}

