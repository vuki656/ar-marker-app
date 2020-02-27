'use strict';

import React from 'react';
import { ViroARImageMarker, ViroARScene, ViroARTrackingTargets, ViroMaterials, ViroVideo } from 'react-viro';

export const MigosMarker = () => {
    return (
        <ViroARScene>
            <ViroARImageMarker target={"logo"}>
                <ViroVideo
                    source={require("../../media/videos/diamond.mp4")}
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
        source: require('../../media/images/markers/migos.png'),
        orientation: "Up",
        physicalWidth: 0.25,
    },
});

export default MigosMarker
