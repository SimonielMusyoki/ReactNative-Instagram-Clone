import React from 'react';
import { Dimensions, Image } from 'react-native';

const Body = ({ imageUri }) => (
    <Image 
        source={{ uri: imageUri}}
        resizeMode="cover"
        style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width
        }}
    />
);

export default Body;