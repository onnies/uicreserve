import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class CategoryCard extends Component {
    
    goToCamera = () => Actions.ListCamera ();
    
    render(){
        var self = this;
        return(
          <TouchableHighlight onPress={this.goToCamera  }>
                <View style={styles.container}>
                   <Image source={{uri: self.props.imageUrl}} style={styles.image}/>
                   <Text style={styles.subtitle}>{self.props.title}</Text>
                </View>
          </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
  container: {
   borderWidth: 1,
   borderColor: "#B8B6BF", 
   justifyContent:'center',
   alignItems:'center',
   width: 100,
   height: 80,
   margin: 5,
  },
  image: {
    width: 60,
    height: 60,
    marginTop:3,
    
  },
  subtitle: {
      textAlign:'center',
      marginBottom:3
    
  },
});