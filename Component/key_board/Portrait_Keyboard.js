import React, { Component } from 'react';
import { View } from 'react-native';
import Button from '../Button';
import Number from './Child_KeyBoard/Number';
import { connect } from 'react-redux';

class Portrait_Keyboard extends Component {
  render() {
    const { font_Size } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="AC"
              type="reset"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title=""
              type="delete"
              color_word="green"
              background="white"
              fontSize={font_Size}
              image={require('../../Icon/delete.png')}
              height='30%'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="%"
              type="operation"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="÷"
              type="operation"
              background="green"
              color_word="white"
              fontSize={font_Size}
            />
          </View>
        </View>
        <View style={{ flex: 4, flexDirection: 'row' }}>
          <View style={{ flex: 3 }}>
            <Number />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Button
                title="×"
                type="operation"
                background="green"
                color_word="white"
                fontSize={font_Size}
              />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Button
                title="-"
                type="negative"
                background="green"
                color_word="white"
                fontSize={font_Size}
              />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Button
                title="+"
                type="operation"
                background="green"
                color_word="white"
                fontSize={font_Size}
              />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Button
                title="="
                type="enter"
                background="green"
                color_word="white"
                fontSize={font_Size}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = ({ orientationState }) => ({
  ...orientationState
})

export default connect(mapStateToProps, null)(Portrait_Keyboard);