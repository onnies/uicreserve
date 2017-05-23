import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class ListCamera extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style ={styles.thumbnail}>
                    <Image style={styles.image} source={{uri: data.image}} resizeMode="contain"/>
                </View>
                <View style={styles.info}>
                    <Text>{data.author}</Text>
                    <Text style={{fontWeight:'bold'}}>{data.title}</Text>
                </View>
             </View>
    );
  }
}
