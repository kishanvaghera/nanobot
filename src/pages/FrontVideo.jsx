import React from 'react'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom';

const FrontVideo = () => {
    const history = useHistory();
    console.log(history)
    const endVideo = () => {
        history.push('/product-bottle');
    }

    return (
        <>
        <ReactPlayer
            url="./img/Nenobot-starting-play.mp4"
            playing
            width="100%"
            height="100%"
            fullscreen="true"
            autoPlay
            onEnded={endVideo}
        />
        </>
    )
}

export default FrontVideo