import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class uicreserve extends Component {
  render() {
    
    return (
      <View style={styles.container}>
        <Text>
          Sorry teachers,
          We have try our best!
          TT
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});