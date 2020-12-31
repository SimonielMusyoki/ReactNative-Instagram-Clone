import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Image, TouchableOpacity } from "react-native";

import { HomeScreen } from '../screens'


const HomeStack = createStackNavigator();

const HomeRouter = () => {

    function HeaderComponents(props) {
        return (
          <View style={{ flexDirection: "row", justifyContent: "space-between",alignItems: "center"}}>
            <TouchableOpacity>
              <Ionicons name="camera-outline" size={40} color="#000" />
            </TouchableOpacity>
            <Image 
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png'}} 
              resizeMode="contain"
              style={{
                height: 50,
                width: 150
              }}
            />
            <TouchableOpacity>
              <Ionicons name="paper-plane-outline" color="#000" size={40}/>
            </TouchableOpacity>
          </View>
        )
    }

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                headerTitle: props => <HeaderComponents {...props} />                  
            }} />
        </HomeStack.Navigator>
           
    )
}

export default HomeRouter