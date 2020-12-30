import React from 'react';
import { Text, View } from 'react-native';
import ProfilePicture from '../../ProfilePicture';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles'

const Header = ({ user }) => (
    <View style={styles.container}>
        <View style={styles.profile}>
            <ProfilePicture imageUri={user.imageUri} size={40} />
            <Text style={{ fontWeight: 'bold', color: "#4f4f4f"}}>{ user.name }</Text>
        </View>
        <MaterialIcons name="more-vert" size={35} color={"#000"} style={styles.icon}/>
    </View>
);

export default Header;