
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  NavigatorIOS
} from 'react-native';
import ViewExample from './view-example'

export default class ListPage extends Component {

    goTo(target){
        return () => {
            this.props.navigator.push({
                component : target,
                title:""
            });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.listItem, styles.center]}>
                    <Text onPress={this.goTo(ViewExample)}>
                        View使用示例
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop:25,
    marginLeft:5,
    marginRight:5,
  },
  listItem : {
    height:40,
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
