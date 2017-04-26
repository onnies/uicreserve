import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Popular extends Component {
    _showDetail =()=>{
        Actions.detail({data:this.props.data});
    }
    render() {
        var data = this.props.data;
        return (
            <TouchableHighlight onPress={this._showDetail}>
            <View style={styles.container}>
                <View style ={styles.thumbnail}>
                    <Image style={styles.image} source={{uri: data.image}} resizeMode="contain"/>
                </View>
                <View style={styles.info}>
                    <Text>{data.author}</Text>
                    <Text style={{fontWeight:'bold'}}>{data.title}</Text>
                </View>
             </View>
             </TouchableHighlight>
    );
  }
}
    
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#B8B6BF',
    borderColor: "#B8B6BF", 
    paddingTop:4,
    paddingHorizontal:12,
    height:80,
  },
  thumbnail:{
      flex:1

  },
  info: {
      flex:3,
      justifyContent:'center',
      alignItems:'flex-end'
  },
  image:{
      height:70
  }

});