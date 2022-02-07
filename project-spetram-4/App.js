import React from 'react'
import {createSwitchNavigator,createAppContainer} from "react-navigation"
import LodingScreen from "./Screens/Loding"
import LoginScreen from "./Screens/Login"
import DashBoardScreen from "./Screens/DashBoard"

const  AppSwitchNavigator = createSwitchNavigator({
  LodingScreen:LodingScreen,
  LoginScreen:LoginScreen,
  DashBoardScreen:DashBoardScreen
})
import * as firebase from "firebase"
import {fireBaseConfig} from "./config"

if (!firebase.apps.length) {
  firebase.initializeApp (fireBaseConfig)
}else{
  firebase.app()
}
const AppNavigator = createAppContainer(AppSwitchNavigator)
export default function App() {
  return (
    
    <AppNavigator/>
  );
}

