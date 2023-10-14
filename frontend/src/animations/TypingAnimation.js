import React, { useEffect, useState } from 'react';
import lottie from 'lottie-web';
import animationData from '../animations/typing.json';  // Adjust the path to your animation file

const TypingAnimation = () => {
    useEffect(() => {
        const animationContainer = document.getElementById('lottie-container');
        lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        });
    }, []);

    return (
        <div id="lottie-container" style={{ width: '70px', height: '50px' }}></div>
    );
};

export default TypingAnimation;
