import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

const DiscoveryScreen = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Discovery screen</Text>
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

export default DiscoveryScreen;