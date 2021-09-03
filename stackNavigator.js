import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from './tabNavigator'
import StoryScreen from '../screens/StoryScreen'
const Stack=createStackNavigator()
const StackNavigator=()=>{
    return(
    <Stack.Navigator
    initialRouteName='home'
    screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='home'
        component={TabNavigator}/>
        <Stack.Screen name='StoryScreen'
         component={StoryScreen}/>
         </Stack.Navigator>
    )
}


export default StackNavigator;