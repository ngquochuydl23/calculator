import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from '../Button';
import Portrait_Keyboard from "./Portrait_Keyboard";
import FunctionButon from './Child_KeyBoard/FunctionButon'
class Landscape_Keyboard extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1.5, flexDirection: 'row' }}>
          <FunctionButon />
        </View>
        <View style={{ flex: 1 }}>
          <Portrait_Keyboard />
        </View>
      </View>
    );
  };
}

export default Landscape_Keyboard;