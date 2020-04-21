import React, { Component } from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import Main_Screen from './Screen/Main_Screen.js';
import { Provider } from 'react-redux'
import store from "./Redux/store";
import { setOrientation } from './Redux/orientation/actions';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SplashScreen from "./Screen/SplashScreen";

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: Main_Screen
});

const AppContainer = createAppContainer(InitialNavigator);

class App extends Component {
  getOrientation = () => {
    const devideWindow = Dimensions.get('window');
    if (devideWindow.width < devideWindow.height) {
      store.dispatch(setOrientation('PORTRAIT'))
    }
    else {
      store.dispatch(setOrientation('LANDSCAPE'))
    }
  }
  componentDidMount() {
    this.getOrientation();
    Dimensions.addEventListener('change', () => this.getOrientation());
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="gray" barStyle="light-content" />
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </View>
    )
  }
}

export default App;
