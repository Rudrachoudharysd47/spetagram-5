import React from 'react'
import {createStackNavigator} from "react-navigation/stack"
import TabNavigator from "./BottomTabNavigator"
import PostScreen from "../Screens/Post"

const Stack = createStackNavigator()

const StackNavigator = ()=>{
  return(
  <Stack.Navigator initialRouteName = "Home" screenOption={{headerShown:false}}>
  <Stack.Screen name = "Home" component = {TabNavigator}></Stack.Screen>
  <Stack.Screen name = "Post" component = {PostScreen}></Stack.Screen>
  </Stack.Navigator>
  )
}
