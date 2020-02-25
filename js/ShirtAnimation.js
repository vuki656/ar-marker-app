'use strict';

import React from 'react';
import { ViroARImageMarker, ViroARScene, ViroARTrackingTargets, ViroVideo, } from 'react-viro';

export const ShirtAnimation = () => {
    return (
        <ViroARScene>
            <ViroARImageMarker target={"logo"}>
                <ViroVideo
                    source={require("./media/videos/video.mp4")}
                    volume={1}
                    loop={true}
                    scale={[0.1, 0.1, 0.1]}
                    position={[0, 0, 0]}
                    rotation={[-80, 0, 0]}
                    width={2}
                    height={2}
                />
            </ViroARImageMarker>
        </ViroARScene>
    );
};

ViroARTrackingTargets.createTargets({
    logo: {
        source: require('./media/images/shirt.png'),
        orientation: "Up",
        physicalWidth: 0.25
    }
});

export default ShirtAnimation
