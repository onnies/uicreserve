import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class PageThree extends Component {
    render() {
        const goToPageMission = () => Actions.Mission();
            return (
                <View style={{margin: 128}}>
                  <Text onPress={goToPageMission}>Show Detail</Text>
                </View>
        );
    } 
}