'use strict';

import React from 'react';
import { ViroARImageMarker, ViroARScene, ViroARTrackingTargets, ViroMaterials, ViroVideo } from 'react-viro';

export const ShirtMarker = () => {
    return (
        <ViroARScene>
            <ViroARImageMarker target={"logo"}>
                <ViroVideo
                    source={require("../media/videos/butterfly.mp4")}
                    volume={1}
                    loop={true}
                    scale={[0.1, 0.1, 0.1]}
                    position={[0, 0, 0]}
                    rotation={[-80, 0, 0]}
                    width={2}
                    height={2}
                    materials={["chromaKeyFilteredVideo"]}
                />
            </ViroARImageMarker>
        </ViroARScene>
    );
};

// Display empty pixel if specified color found, for transparency
ViroMaterials.createMaterials({
    chromaKeyFilteredVideo : {
        chromaKeyFilteringColor: "#13ff07"
    },
});

// Set marker
ViroARTrackingTargets.createTargets({
    logo: {
        source: require('../media/images/markers/shirt.png'),
        orientation: "Up",
        physicalWidth: 0.25
    }
});

export default ShirtMarker