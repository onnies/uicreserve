import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash'

export default class Popular extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Sorry teachers,
          Please forgive us
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