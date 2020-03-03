'use strict';

import React from 'react';
import {
    ViroAnimatedImage,
    ViroARImageMarker,
    ViroARScene,
    ViroARTrackingTargets,
    ViroMaterials,
    ViroVideo,
} from 'react-viro';

export const ShirtMarker = (props) => {
    const { selectedScreen } = props.arSceneNavigator.viroAppProps

    const getMediaType = () => {
        switch (selectedScreen) {
            case "glitch":
            case "sound":
            case "butterfly":
                return (
                    <ViroVideo
                        source={getMediaRef()}
                        volume={1}
                        loop={true}
                        scale={[ 0.5, 0.5, 0.5 ]}
                        position={[ 0, 0, 0 ]}
                        rotation={[ -80, 0, 0 ]}
                        width={2}
                        height={2}
                        materials={[ "filterBackground" ]}
                    />
                )
            case "slowBC":
            case "fastBC":
                return (
                    <ViroAnimatedImage
                        scale={[ 0.5, 0.5, 0.5 ]}
                        position={[ 0, 0, 0 ]}
                        rotation={[ -80, 0, 0 ]}
                        width={2}
                        height={2}
                        source={getMediaRef()}
                    />
                )
        }
    }

    const getMediaRef = () => {
        switch (selectedScreen) {
            case "glitch":
                return require("../../media/videos/glitch.mp4")
            case "sound":
                return require("../../media/videos/sound.mp4")
            case "butterfly":
                return require("../../media/videos/butterfly.mp4")
            case "fastBC":
                return require("../../media/gifs/fastBC.gif")
            case "slowBC":
                return require("../../media/gifs/slowBC.gif")
        }
    }

    return (
        <ViroARScene>
            <ViroARImageMarker target={"logo"}>
                {getMediaType()}
            </ViroARImageMarker>
        </ViroARScene>
    );
};

// Display empty pixel if specified color found, for transparent videos
ViroMaterials.createMaterials({
    filterBackground: {
        chromaKeyFilteringColor: "#00b241",
    },
});

// Set marker
ViroARTrackingTargets.createTargets({
    logo: {
        source: require('../../media/images/markers/migos.png'),
        orientation: "Up",
        physicalWidth: 0.9,
    },
});

export default ShirtMarker
