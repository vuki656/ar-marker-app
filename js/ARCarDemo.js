'use strict';

import React from 'react';
import {
    Viro3DObject,
    ViroAnimations,
    ViroARImageMarker,
    ViroARScene,
    ViroARTrackingTargets,
    ViroLightingEnvironment,
    ViroMaterials,
} from 'react-viro';

class ARCarDemo extends React.Component {
    state = {
        texture: "white",
        playAnim: false,
        animateCar: false,
        tapWhite: false,
        tapBlue: false,
        tapGrey: false,
        tapRed: false,
        tapYellow: false,
    };

    handleTargetFound = () => {
        this.setState({ animateCar: true })
    };

    render() {
        return (
            <ViroARScene>
                <ViroLightingEnvironment source={require('./res/tesla/garage_1k.hdr')} />
                <ViroARImageMarker
                    target={"logo"}
                    onAnchorFound={this.handleTargetFound}
                    pauseUpdates={this.state.pauseUpdates}
                >
                    <Viro3DObject
                        scale={[0, 0, 0]}
                        source={require('./res/tesla/object_car.obj')}
                        resources={[require('./res/tesla/object_car.mtl')]}
                        type="OBJ"
                        materials={this.state.texture}
                        animation={{ name: "scaleCar", run: this.state.animateCar, }}
                    />
                </ViroARImageMarker>
            </ViroARScene>
        );
    }
}

ViroMaterials.createMaterials({
    white: {
        lightingModel: "PBR",
        diffuseTexture: require('./res/tesla/object_car_main_Base_Color.png'),
        metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
        roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
    },
});

ViroARTrackingTargets.createTargets({
    logo: {
        source: require('./res/logo.png'),
        orientation: "Up",
        physicalWidth: 0.165 // real world width in meters
    }
});

ViroAnimations.registerAnimations({
    scaleCar: {
        properties: { scaleX: .09, scaleY: .09, scaleZ: .09, },
        duration: 500, easing: "bounce"
    },
});

export default ARCarDemo
