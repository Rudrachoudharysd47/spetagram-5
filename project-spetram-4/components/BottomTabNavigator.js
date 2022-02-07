import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Feed from '../Screens/feed'
import Post from '../Screens/CreatePost'

const Tab = createBottomTabNavigator()
const BottomTabNavigator = ()=>{
return(
  <Tab.Navigator
  screenOption={({route})=>({
   tabBarIcon:({focused,color,size})=>{
     let iconName
     if(route.name === 'feed'){
       iconName = focused
       ? 'book'
       : 'book-outline'
     }else if(route.name === 'createpost'){
     iconName =  focused
     }return<IonIcons name={iconName} size = {size} color ={color}/>
   },
  })
  }
  tabBarOption={{
    activeTintColor:'tomato',
    inactiveTintColor:'grey'
  }}
  >
  <Tab.Screen name = 'feed' component={Feed}></Tab.Screen>
  <Tab.Screen name = "createPost" component={Post}></Tab.Screen>
  </Tab.Navigator>
)
}
export default BottomTabNavigator