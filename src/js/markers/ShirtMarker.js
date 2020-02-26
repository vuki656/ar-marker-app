'use strict';

import React from 'react';
import { ViroARImageMarker, ViroARScene, ViroARTrackingTargets, ViroMaterials, ViroVideo, } from 'react-viro';

export const ShirtMarker = (props) => {
    const { videoName } = props.arSceneNavigator.viroAppProps

    const getVideoRef = () => {
        switch (videoName) {
            case "glitch":
                return require("../../media/videos/glitch.mp4")
            case "sea":
                return require("../../media/videos/sea.mp4")
            case "smiley":
                return require("../../media/videos/smiley.mp4")
            case "sound":
                return require("../../media/videos/sound.mp4")
        }
    }

    return (
        <ViroARScene>
            <ViroARImageMarker target={"logo"}>
                <ViroVideo
                    source={getVideoRef()}
                    volume={1}
                    loop={true}
                    scale={[ 0.1, 0.1, 0.1 ]}
                    position={[ 0, 0, 0 ]}
                    rotation={[ -80, 0, 0 ]}
                    width={2}
                    height={2}
                    materials={[ "chromaKeyFilteredVideo" ]}
                />
            </ViroARImageMarker>
        </ViroARScene>
    );
};

// Display empty pixel if specified color found, for transparent videos
ViroMaterials.createMaterials({
    chromaKeyFilteredVideo: {
        chromaKeyFilteringColor: "#5efe0e"
    },
});

// Set marker
ViroARTrackingTargets.createTargets({
    logo: {
        source: require('../../media/images/markers/shirt.png'),
        orientation: "Up",
        physicalWidth: 0.25
    }
});

export default ShirtMarker
