import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Profile from '../Screens/Profile'
import StackNavigator from "./Stacknavigator"

const Drawer = createDrawerNavigator()

const DrawerNavigator=()=>{
  return(
  <Drawer.Navigator>
  <Drawer.Screen name = "home" component = {StackNavigator}></Drawer.Screen>
  <Drawer.Screen name = "Profile" component = {Profile}></Drawer.Screen>
  </Drawer.Navigator>
  )
}
export default DrawerNavigator;