import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import firebase from '../firebase'
import {Actions} from 'react-native-router-flux';
import CategoryCard from './reserve/CategoryCard'
import Popular from './reserve/Popular'
import _ from 'lodash'

var popularData = [
  {image: "https://www.bhphotovideo.com/images/categoryImages/desktop/325x325/21008-DSLR-Cameras.jpg", title: "Camera"},
  {image: "https://www.usa.canon.com/internet/wcm/connect/us/5833c399-f372-4d8c-a0bf-2ba61f84e887/ef-s-18-55mm-f-3-5-5-6-is-stm-side-d.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-5833c399-f372-4d8c-a0bf-2ba61f84e887-kZnR5ES", title: "Lens"},
  {image: "https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-aQIVEfvQ997L3sEHoBd-VCJRKp0azfIGIA2qjHVulZXiEO1kIf-SI/Views/353_4808_SB-700-AF-Speedlight-front.png", title: "Flash"},
  {image: "https://1.bp.blogspot.com/-GemB9YFSYgI/U8zBqYll4tI/AAAAAAAAARI/N-7JlGiJDi4/s1600/Headphone.jpg", title: "Earphone"}
]; 
export default class ReservePage extends Component {

  componentDidMount() {
    var self = this;
    firebase.database()
    .ref('category')
    .once('value', (snapshot) => {
      const value = snapshot.val();
      var categoryList = _.sortBy(_.toArray(value), 'seq')
      self.setState({category: categoryList});      
    });

    firebase.database()
    .ref('info')
    .once('value', (snapshot) => {
      const value = snapshot.val();
      var _listInfo = _.toArray(value)
      ///alert(_listInfo.length)
      self.setState({listInfo: self.state.dataSource.cloneWithRows(_listInfo)});      
    });
    
   {/** var users = [
      {'id': '5'},
      {'id': '2'},
      {'id': '4'},
      {'id': '3'},
      {'id': '1'}

    ];

    _.sortBy(users,['id']);**/}

  }
    goToItemsPage = () => Actions.Items();
    openDrawer = () => Actions.refresh({key: 'drawer', open: true});

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
                    <View style={styles.categories_container}>
                        <Text>Catrgories </Text>
                        
                      
                        <View style={styles.categories}>
                        {
                          self.state.category.map(function (item) {
                            return <CategoryCard title={item.title} imageUrl={item.image}/>
                          })
                        }
                          {/**<CategoryCard title="Camera" imageUrl="https://www.bhphotovideo.com/images/categoryImages/desktop/325x325/21008-DSLR-Cameras.jpg"/>
                          <CategoryCard title="Lens" imageUrl="https://www.usa.canon.com/internet/wcm/connect/us/5833c399-f372-4d8c-a0bf-2ba61f84e887/ef-s-18-55mm-f-3-5-5-6-is-stm-side-d.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-5833c399-f372-4d8c-a0bf-2ba61f84e887-kZnR5ES"/>
                          <CategoryCard title="Flash" imageUrl="https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-aQIVEfvQ997L3sEHoBd-VCJRKp0azfIGIA2qjHVulZXiEO1kIf-SI/Views/353_4808_SB-700-AF-Speedlight-front.png"/>
                          
                          <CategoryCard title="Earphone" imageUrl="https://firebasestorage.googleapis.com/v0/b/uicreserve-a8f8a.appspot.com/o/Headphone.jpg?alt=media&token=6a3bb474-b266-4459-a1ef-c9aa6083c037"/>
                          <CategoryCard title="Mouse Pen" imageUrl="https://www.bhphotovideo.com/images/images2500x2500/wacom_cth480_intuos_creative_pen_1002449.jpg"/>
                          <CategoryCard title="Etc." imageUrl="https://images-na.ssl-images-amazon.com/images/I/41O9k0Hw-jL._SY355_.jpg"/>**/}
                          
                        </View>
                   </View>
                
                      <Text>Popular</Text>
                      <ListView dataSource={this.state.listInfo} renderRow={this._renderRow}/>  
                  
               </View>
  

        );

    }

}


const styles = StyleSheet.create({
  container: {
    //flex :1,
    marginTop:64,
    borderWidth: 0,
   // borderColor: 'white',
    backgroundColor:'white',
    flexDirection: 'column',
    
  },
  categories_container: {
    //flex: 1,
    alignItems: 'flex-start', 
    borderWidth: 1,
    borderColor: '#B8B6BF',
  },
  categories: {   
    //flex: 1, 
    flexDirection:'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
 //   popular_container: {
    //flex: 1,
 //   alignItems: 'flex-start', 
 //   borderWidth: 1,
 // },
});

