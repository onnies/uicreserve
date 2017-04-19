import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Mission extends Component {

    render(){
    const goToPageHistory = () => Actions.History();
        return(
                <View style={{margin: 128}}>
                  <Text>Mission Complete!</Text>
                <Text onPress={goToPageHistory}>Go to History</Text>
                </View>

        );
    }
}