import React, { Component } from 'react';
import { View } from 'react-native';
import Button from '../../Button';
import { connect } from 'react-redux';

class Number extends Component {
  render() {
    const { font_Size } = this.props;
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="7"
              type="number"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="4"
              type="number"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="1"
              type="number"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button title="+/-"
              type="negative"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="8"
              type="number"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="5"
              type="number"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="2"
              type="number"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="0"
              type="number"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="9"
              type="number"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="6"
              type="number"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="3"
              type="number"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="."
              type="pointer"
              color_word="green"
              background="white"
              fontSize={font_Size}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ orientationState }) => ({
  ...orientationState
})

export default connect(mapStateToProps, null)(Number);