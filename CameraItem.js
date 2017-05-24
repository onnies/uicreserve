import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ListItem extends Component {
    _showDetail =()=>{
        Actions.detail({data:this.props.data});
    }
    render() {
        var data = this.props.data;
        console.log(this.props.data)
        return (
            <TouchableHighlight onPress={this._showDetail}>
            <View style={styles.container}>
                <View style ={styles.thumbnail}>
                    <Image style={styles.image} source={{uri: this.props.data.image}} resizeMode="contain"/>
                </View>
                <View style={styles.info}>
                
                    
                    <Text style={{fontWeight:'bold'}}>{this.props.data.name}</Text>
                    <Text>amount: {this.props.data.amount}</Text>
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