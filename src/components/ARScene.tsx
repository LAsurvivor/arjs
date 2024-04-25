import 'aframe';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Entity, Scene} from 'aframe-react';

function ARScene() {
    return (
        <>
            <div className="ar-container" style={{
                width: '600px',
                height: '400px',
                border: '1px solid #ccc',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Scene embedded style={{width: '100%', height: '100%'}}>
                    <a-assets>
                        <img
                            id="groundTexture"
                            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
                            alt=""
                        />
                        <img
                            id="skyTexture"
                            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
                            alt=""
                        />
                        <a-asset-item
                            id="target"
                            src="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/right-hand-white-webxr-tracking-ready/model.gltf"></a-asset-item>
                    </a-assets>

                    <Entity gltf-model="#target"
                            position={{x: 2, y: 3, z: -3}}
                            scale="6 6 6"
                    />
                    <Entity
                        primitive="a-plane"
                        src="#groundTexture"
                        rotation="-90 0 0"
                        height="100"
                        width="100"
                    />
                    <Entity primitive="a-light" type="ambient" color="#445451"/>
                    <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
                    <Entity
                        primitive="a-sky"
                        height="2048"
                        radius="30"
                        src="#skyTexture"
                        theta-length="90"
                        width="2048"
                    />
                    {/*<Entity*/}
                    {/*    geometry={{primitive: "box"}}*/}
                    {/*    material={{color: "red"}}*/}
                    {/*    position={{x: 0, y: 0, z: -5}}*/}
                    {/*    hello-world*/}
                    {/*/>*/}
                    <Entity light={{type: "point"}}/>
                    <Entity text={{value: "Hello, WebVR!"}}/>

                    <Entity primitive="a-camera">
                        <Entity
                            primitive="a-cursor"
                            animation__click={{
                                property: "scale",
                                startEvents: "click",
                                from: "0.1 0.1 0.1",
                                to: "1 1 1",
                                dur: 150,
                            }}
                        />
                    </Entity>
                    {/*<Entity fps-counter position={{ x: 0, y: 0, z: -5 }} />*/}
                </Scene>
            </div>
            {/*<div className="ar-container" style={{*/}
            {/*    width: '600px',*/}
            {/*    height: '400px',*/}
            {/*    border: '1px solid #ccc',*/}
            {/*    position: 'relative',*/}
            {/*    overflow: 'hidden'*/}
            {/*}}>*/}
            {/*    <a-scene embedded arjs>*/}
            {/*        <a-marker preset="hiro">*/}
            {/*            <a-box position="0 0.5 0" material="color: red;">*/}
            {/*                <a-animation attribute="rotation"*/}
            {/*                             dur="3000"*/}
            {/*                             to="360 360 0"*/}
            {/*                             repeat="indefinite"*/}
            {/*                             easing="linear">*/}
            {/*                </a-animation>*/}
            {/*            </a-box>*/}
            {/*        </a-marker>*/}
            {/*        <a-entity camera></a-entity>*/}
            {/*    </a-scene>*/}
            {/*</div>*/}
        </>
    );
}

export default ARScene;