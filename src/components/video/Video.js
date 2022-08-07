import React from 'react';
// import background from '../../assets/videos/rice.mp4';
const myVideo = (props) => {
    return (
        <video
        autoPlay
        loop
        muted
        style={{
            position:"absolute",
            width: '100%',
            left: "0%",
            top: "0%",
            height: "100vh",
            objectFit: "fill",
            // transform: "translate(-50%, -50%)",
            zIndex: "-1"
        }}
        >
            <source src={props.url} type="video/mp4" />
        </video>
    );

}

export default myVideo;