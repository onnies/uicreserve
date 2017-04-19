/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import ReservePage from "./app/ReservePage";
import ItemsPage from "./app/ItemsPage";
import DetailsPage from "./app/DetailsPage";
import NavigationDrawer from "./app/NavigationDrawer";
import Mission from "./app/Mission";
import History from "./app/History";

export default class uicreserve extends Component {
  render() {
    return (
      <Router>
        <Scene key="drawer" component={NavigationDrawer} open={false} >
          <Scene key="root">
            <Scene key="Reserve" component={ReservePage} title="Reserve" initial={true}/>
            <Scene key="Items" component={ItemsPage} title="Items"/>
            <Scene key="Details" component={DetailsPage} title="Details"/>
            <Scene key="Mission" component={Mission} title="Mission"/>
            <Scene key="History" component={History} title="History"/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('uicreserve', () => uicreserve);
