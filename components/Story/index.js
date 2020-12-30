import React from 'react';
import { Text, View } from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles'

const Story = ({ imageUri, profileName }) => (
    <View styles={styles.container}>
        <ProfilePicture imageUri={imageUri}/>
        <Text style={styles.profileName}>{profileName}</Text>
    </View>
);

export default Story;