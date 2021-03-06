/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  NavigatorIOS
} from 'react-native';
import ListPage from './js/pages/list-page'

export default class AwesomeProject extends Component {
  render() {
    return (
        <NavigatorIOS
          style={{flex : 1}}
          initialRoute={{
            component:ListPage,
            title : '测试',
            navigationBarHidden:true,
            passProps : {}
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:25,
    marginLeft:5,
    marginRight:5,
    height:84,
    borderRadius:5,
    padding:2,
    backgroundColor:'#FF0067',
    flexDirection : 'row'
  },
  item : {
    height:80,
    borderColor : 'blue',
  },
  center : {
    justifyContent : 'center',
    alignItems : 'center'
  },
  flex : {
    flex : 1
  },
  font:{
    color : '#fff',
    fontSize:16,
    fontWeight:'bold'
  },
  lineLeftRight:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    borderColor:"#fff"
  },
  lineCenter:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:"#fff"
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
