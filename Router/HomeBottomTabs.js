import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'

import HomeRouter from './HomeRoutes';
import { DiscoveryScreen, Notifications, NewPost, ProfileScreen } from '../screens'

const Tab = createBottomTabNavigator();

const HomeBottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route})=> ({
            tabBarIcon: ({ focused, color, size}) => {
                if (route.name == "Home"){
                    return <Fontisto name="home" color={color} size={size*1.2} />
                }else if (route.name== "Discovery"){
                    return <Fontisto name="search" color={color} size={size*1.2} />
                }else if (route.name== "Post"){
                    return <Feather name="plus-square" color={color} size={size*1.2} />
                }else if (route.name== "Notifications"){
                    return <AntDesign name="hearto" color={color} size={size*1.2} />
                }else if (route.name== "Profile"){
                    return <Ionicons name="person" color={color} size={size*1.2} />
                }
            }
            })}
            tabBarOptions={{
                showLabel: false,
                activeTintColor: "#D74870",
                inactiveTintColor: "#4f4f4f"
            }}
        >
            <Tab.Screen name="Home" component={HomeRouter} />
            <Tab.Screen name="Discovery" component={DiscoveryScreen} />
            <Tab.Screen name="Post" component={NewPost} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default HomeBottomTabsNavigator;