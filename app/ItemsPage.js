import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class PageTwo extends Component {
    render(){
        const goToPageThree = () => Actions.Details();
        return(
                <View style={{margin: 128}}>
                  <Text onPress={goToPageThree}>Item's Detail</Text>
                </View>
        );
    } 
}