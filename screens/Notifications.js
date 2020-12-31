import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

const Notifications = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Notifications screen</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: "#000"
    }
})

export default Notifications;