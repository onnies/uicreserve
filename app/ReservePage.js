import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CategoryCard from './reserve/CategoryCard'

export default class PageOne extends Component {
    goToPageTwo = () => Actions.Items();
    openDrawer = () => Actions.refresh({key: 'drawer', open: true});

    render(){
        return(
                <View style={styles.container}>
                    <View style={styles.categories_container}>
                        <Text onPress={this.goToPageTwo}>Catrgories</Text>
                      
                        <View style={styles.categories}>
                        
                          <CategoryCard title="Camera" imageUrl="https://www.bhphotovideo.com/images/categoryImages/desktop/325x325/21008-DSLR-Cameras.jpg"/>
                          <CategoryCard title="Camera" imageUrl="https://www.bhphotovideo.com/images/categoryImages/desktop/325x325/21008-DSLR-Cameras.jpg"/>
                          <CategoryCard title="Camera" imageUrl="https://www.bhphotovideo.com/images/categoryImages/desktop/325x325/21008-DSLR-Cameras.jpg"/>
                          
                          <CategoryCard title="Camera" imageUrl="https://www.bhphotovideo.com/images/categoryImages/desktop/325x325/21008-DSLR-Cameras.jpg"/>
                          <CategoryCard title="Camera" imageUrl="https://www.bhphotovideo.com/images/categoryImages/desktop/325x325/21008-DSLR-Cameras.jpg"/>
                          <CategoryCard title="Camera" imageUrl="https://www.bhphotovideo.com/images/categoryImages/desktop/325x325/21008-DSLR-Cameras.jpg"/>
                          
                        </View>
                  </View>                  
                </View>

        );
    }
}

const styles = StyleSheet.create({
  container: {
    //flex :1,
    marginTop:64,
    borderWidth: 1,
    //borderColor: 'red',
    flexDirection: 'column',
    
  },
  categories_container: {
    //flex: 1,
    alignItems: 'flex-start', 
    borderWidth: 1,
  },
  categories: {   
    //flex: 1, 
    flexDirection:'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  }
});

