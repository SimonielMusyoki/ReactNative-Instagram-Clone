import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import ProfilePicture from '../ProfilePicture';
import styles from './styles'

const Story = ({ story }) => {

    const {
        user: {
            id, 
            imageUri,
            name,
        }
    } = story

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("StoriesView", { userId: id})
    }
    return(
        <TouchableOpacity styles={styles.container} onPress={onPress}>
            <ProfilePicture imageUri={imageUri}/>
            <Text style={styles.profileName}>{name.split(" ")[1]}</Text>
        </TouchableOpacity>
    );
}
    

export default Story;