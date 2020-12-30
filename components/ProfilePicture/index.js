import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles'

const ProfilePicture = ({ imageUri, size=80 }) => (
    <View style={{...styles.container, width: size + 6, height: size + 6, borderRadius: (size + 6) * 0.5}}>
        <Image 
        source={{ uri: imageUri }}
        style={{...styles.image, width: size, height: size, borderRadius: size * 0.5}}
        />
    </View>
);

export default ProfilePicture;