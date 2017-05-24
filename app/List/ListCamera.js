import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import _ from 'lodash'
import {Actions} from 'react-native-router-flux';
import ListItem from './ListItem'

export default class ListCamera extends Component {

  componentDidMount() {
    var self = this;
    firebase.database()
      .ref('info')
    .once('value', (snapshot) => {
      const value = snapshot.val();
      var _listInfo = _.toArray(value)
      ///alert(_listInfo.length)
      self.setState({listInfo: self.state.dataSource.cloneWithRows(_listInfo)});      
    });

    constructor(props){
        super (props)
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});

        this.state = {
          dataSource: ds,
          category: [], 
          assets: ds.cloneWithRows([]), 
          listInfo: ds.cloneWithRows([]),       
        }
         
    }

    _renderRow(data){
      return <Popular data={data}/>
      
    }
    _showDetail(){
        console.log('hello world');
    }


    render(){
      var self = this;

        return(
                <View style={styles.container}>
                 <Text>Popular</Text>
                      <ListView dataSource={this.state.listInfo} renderRow={this._renderRow}/>  
                  
               </View>
  

        );

    }

}

const styles = StyleSheet.create({
  container: {
    flex :1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    top: 54,
  }
});
      
