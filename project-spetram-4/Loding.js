import React,{Comment} from 'react'
import {Text,View,ActivityIndicator} from "react-native"
import firebase from "firebase"
export default class Loding extends Comment{
    componentDidMount(){
        this.checkIfLoggedIn()
    }
    checkIfLoggedIn=()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this.props.navigation.navigate('DashBoardScreen')
            }

            else{
                this.props.navigation.navigate('loginScreen')
            }
        })
    }
    render(){
        return(
            <View style = {{flex:1,justifyContent:"center",alignItems:"center"}}>
            <ActivityIndicator size = "large" />
            </View>
        )
    }
}