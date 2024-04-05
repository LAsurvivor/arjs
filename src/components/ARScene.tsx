import React from 'react';

const ARScene: React.FC = () => {
    // HTML content
    const htmlContent: string = `
    <!doctype HTML>
    <html>
        <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
        <script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.2/aframe/build/aframe-ar.js"></script>
        <body style="margin: 0px; overflow: hidden;">
            <div>TEST</div>
            <a-scene embedded arjs>
                <a-marker preset="hiro">
                    <a-box position="0 0.5 0" material="color: red;">
                        <a-animation attribute="rotation"
                            dur="3000"
                            to="360 360 0"
                            repeat="indefinite"
                            easing="linear">
                        </a-animation>
                    </a-box>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        </body>
    </html>`;

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default ARScene;
