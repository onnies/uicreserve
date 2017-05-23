import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CategoryCard from './reserve/CategoryCard'
import Popular from './reserve/Popular'

//var ENDPOINT = "http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=73b19491b83909c7e07016f4bb4644f9:2:60667290";

export default class ReservePage extends Component {
    goToItemsPage = () => Actions.Items();
    openDrawer = () => Actions.refresh({key: 'drawer', open: true});

    constructor(props){
        super (props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        this.state = {dataSource: ds.cloneWithRows(['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8', 
               'Item9', 'Item10'])
        };
         
    }
    _renderRow(data){
      return <Popular data={data}/>
      
}

    render(){
        return(
                <View style={styles.container}>
                    <View style={styles.categories_container}>
                        <Text onPress={this.goToItemsPage}>Catrgories</Text>
                      
                        <View style={styles.categories}>
                        
                          <CategoryCard title="Camera" imageUrl="https://www.bhphotovideo.com/images/categoryImages/desktop/325x325/21008-DSLR-Cameras.jpg"/>
                          <CategoryCard title="Lens" imageUrl="https://www.usa.canon.com/internet/wcm/connect/us/5833c399-f372-4d8c-a0bf-2ba61f84e887/ef-s-18-55mm-f-3-5-5-6-is-stm-side-d.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-5833c399-f372-4d8c-a0bf-2ba61f84e887-kZnR5ES"/>
                          <CategoryCard title="Flash" imageUrl="https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-aQIVEfvQ997L3sEHoBd-VCJRKp0azfIGIA2qjHVulZXiEO1kIf-SI/Views/353_4808_SB-700-AF-Speedlight-front.png"/>
                          
                          <CategoryCard title="Earphone" imageUrl="https://1.bp.blogspot.com/-GemB9YFSYgI/U8zBqYll4tI/AAAAAAAAARI/N-7JlGiJDi4/s1600/Headphone.jpg"/>
                          <CategoryCard title="Mouse Pen" imageUrl="https://www.bhphotovideo.com/images/images2500x2500/wacom_cth480_intuos_creative_pen_1002449.jpg"/>
                          <CategoryCard title="Etc." imageUrl="https://images-na.ssl-images-amazon.com/images/I/41O9k0Hw-jL._SY355_.jpg"/>
                          
                        </View>
                   </View>
                   <Text>Popular</Text>
                   <Popular dataSource = {this.state.dataSource}/>  
              
               </View>
  

        );

    }

}


const styles = StyleSheet.create({
  container: {
    //flex :1,
    marginTop:64,
    borderWidth: 1,
   // borderColor: 'white',
    backgroundColor:'white',
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
  },
});

