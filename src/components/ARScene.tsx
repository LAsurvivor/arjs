import React from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

function ARScene() {
    return (
        <Scene stats>
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
            </a-assets>

            <Entity
                primitive="a-plane"
                src="#groundTexture"
                rotation="-90 0 0"
                height="100"
                width="100"
            />
            <Entity primitive="a-light" type="ambient" color="#445451" />
            <Entity primitive="a-light" type="point" intensity="2" position="2 4 4" />
            <Entity
                primitive="a-sky"
                height="2048"
                radius="30"
                src="#skyTexture"
                theta-length="90"
                width="2048"
            />
            <Entity
                geometry={{ primitive: "box" }}
                material={{ color: "red" }}
                position={{ x: 0, y: 0, z: -5 }}
                hello-world
            />
            <Entity light={{ type: "point" }} />
            <Entity text={{ value: "Hello, WebVR!" }} />

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
            <Entity fps-counter position={{ x: 0, y: 0, z: -5 }} />
        </Scene>
    );
}

export default ARScene;