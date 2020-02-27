'use strict';

import React from 'react';
import { ViroARImageMarker, ViroARScene, ViroARTrackingTargets, ViroMaterials, ViroVideo } from 'react-viro';

export const ShirtMarker = (props) => {
    const { videoName } = props.arSceneNavigator.viroAppProps

    const getVideoRef = () => {
        switch (videoName) {
            case "glitch":
                return require("../../media/videos/glitch.mp4")
            case "sound":
                return require("../../media/videos/sound.mp4")
            case "geometry":
        }
    }

    return (
        <ViroARScene>
            <ViroARImageMarker target={"logo"}>
                <ViroVideo
                    source={getVideoRef()}
                    volume={1}
                    loop={true}
                    scale={[ 0.5, 0.5, 0.5 ]}
                    position={[ 0, 0, 0 ]}
                    rotation={[ -80, 0, 0 ]}
                    width={2}
                    height={2}
                    materials={[ "filterBackground" ]}
                />
            </ViroARImageMarker>
        </ViroARScene>
    );
};

// Display empty pixel if specified color found, for transparent videos
ViroMaterials.createMaterials({
    filterBackground: {
        chromaKeyFilteringColor: "#a0f74e",
    },
});

// Set marker
ViroARTrackingTargets.createTargets({
    logo: {
        source: require('../../media/images/markers/shirt.png'),
        orientation: "Up",
        physicalWidth: 0.25,
    },
});

export default ShirtMarker
