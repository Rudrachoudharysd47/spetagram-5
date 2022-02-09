import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

export default class PostCard extends Component {
  render() {
    return (
      <View style = {styles.container}>
      <View style = {styles.cardContainer}>
      <View style = {styles.authorContainer}>
      <View style = {styles.authorImageContainer}>
      <Image source = {require('../assets/profile_img.png')} styles = {styles.profileImage}></Image>
      </View>
      <View style = {styles.authorNameContainer}>
      <Text style = {styles.authorNameText}>{this.props.post.author}</Text>
      </View>
      </View>
      <Image source = {require('../assets/post.jpeg')} style = {styles.postImage}></Image>
      <View style = {styles.captionContainer}>
      <Text style = {styles.captionText}>{this.props.post.caption}</Text>
      </View>
      <View style = {styles.actionContainer}>
      <View style={styles.likeButton}>
      <Ionicons name = "heart" size ={RFValue(30)} color = "white"></Ionicons>
      <Text style = {styles.likeText}>1M</Text>
      </View>
      </View>
      </View>
      </View>
    );
  }
}
