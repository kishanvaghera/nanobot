import React from 'react'
import '../FullScreenImage.css'
// import Image360Viewer from '@hauvo/react-native-360-image-viewer/lib';
import Image360View from './Image360View';
import _ from 'lodash'
// import React360Viewer from 'react-360-view';
/* import {
  View,
  Dimensions
} from 'react-native'; */

const ProductBottle = () => {

  // const { width, height } = Dimensions.get('window')
  const images = _.reverse([`./img/Bottle360/0001.png`,`./img/Bottle360/0002.png`
  ])

  const imageUrl = './img/360-Entrance-Cam-Main-Center.png';
  const FullScreenImage = ({ imageUrl }) => {
    const backgroundImageStyle = {
      backgroundImage: `url(${imageUrl})`,
    };

    return <div className="fullscreen-image" style={backgroundImageStyle}>
      <Image360View />
      {/* <View></View> */}
      {/* <React360Viewer /> */}
      {/* <Image360Viewer srcset={images} ></Image360Viewer> */}
    </div>;
  };

  return (
    <>
      <FullScreenImage imageUrl={imageUrl} />
    </>
  )
}

export default ProductBottle