import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from '../screens/feed'
import CreateStory from '../screens/CreateStory'
import {StyleSheet} from 'react-native'

const Tab=createMaterialBottomTabNavigator()

const BottomTabNavigator = () =>{
   return(
<Tab.Navigator 
label={false}
barStyle={styles.bottomtabstyle}
screenOptions={({route})=>({
    tabBarIcon:({focused,color,size})=>{
        let iconName;
        if(route.name === "Feed"){
            iconName = focused?
            'home': 'home-outline'
        }else if(route.name === "createStory"){
            iconName = focused ? 'add-circle' : 'add-circle-outline';
        }
        return <Ionicons name = {iconName} size = {RFValue(25)} color={color} style={styles.icon}/>
    }
})}


    activeColor={'tomato'}
    inactiveColor={'grey'}
>
  <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="CreateStory" component={CreateStory} />
</Tab.Navigator>
   );
}
const styles=StyleSheet.create({
    bottomtabstyle:{
        backgroundColor:'blue',
        height:'8%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        overflow:'hidden',
        position:'absolute',
    },
    icon:{
        width:RFValue(30),
        height:RFValue(30),
    }
})

export default BottomTabNavigator