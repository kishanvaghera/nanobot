import React from 'react'
import ThreeSixty from 'react-360-view'
// import { AppRegistry, asset, Environment, NativeModules } from 'react-360';

const Image360View = () => {
    const images = [
        { src: './img/Bottle360/0001.png', alt: 'Image 1' },
        { src: './img/Bottle360/0002.png', alt: 'Image 2' },
        { src: './img/Bottle360/0003.png', alt: 'Image 3' },
        // Add more image paths as needed
    ];

  return (
    <div style={{ width: '600px', height: '600px' }}>
        {/* <Viewer images={images} width={800} height={600} /> */}

            {/* Optional: Add hotspots for interaction */}
            {/* <Hotspot
            image="./img/Bottle360/0001.png"
            x={0.5}
            y={0.5}
            width={50}
            height={50}
            onClick={() => console.log('Hotspot clicked')}
            /> */}
            <ThreeSixty
                amount={90}
                imagePath="./img/Bottle360"
                fileName="0001.png"
                autoplay="true"
                loop="5"
            />
    </div>
  )
}

export default Image360View