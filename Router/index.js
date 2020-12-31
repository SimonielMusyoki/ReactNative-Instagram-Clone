import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import HomeBottomTabsNavigator from './HomeBottomTabs';
import StoriesView from '../screens/StoriesView'

const RootStack = createStackNavigator();

const Router = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomeBottomTabsNavigator} />
            <RootStack.Screen name="StoriesView" component={StoriesView} />
        </RootStack.Navigator>
    )
}

export default Router;