import React, { Component } from 'react';
import { View } from 'react-native';
import Button from '../../Button';
import { connect } from 'react-redux';

class FunctionButon extends Component {
  render() {
    const { rad_to_deg, mode } = this.props
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="("
              type="bracket"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title=""
              type="modeshift"
              color_word="green"
              background="white"
              fontSize='2.7'
              image={require('../../../Icon/change.png')}
              height='32%'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="1/x"
              type="fraction"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button title="x!"
              type="factorial"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title={rad_to_deg ? "Deg" : "Rad"}
              type="RadToDeg"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title=")"
              type="bracket"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="x"
              type="pow2"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="√x"
              type="function"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="sin"
              type={mode ? "arcfunction" : "function"}
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="sinh"
              type={mode ? "arcfunction" : "function"}
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="mc"
              type="memory"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="x"
              type="pow3"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="∛x"
              type="function"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="cos"
              type={mode ? "arcfunction" : "function"}
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="cosh"
              type={mode ? "arcfunction" : "function"}
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="m+"
              type="memory"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="x"
              type="powy"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="2"
              type="powx"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="tan"
              type={mode ? "arcfunction" : "function"}
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="tanh"
              type={mode ? "arcfunction" : "function"}
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="m-"
              type="memory"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="e"
              type="function"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title={mode ? "C" : "P"}
              type={mode ? "combinations" : "permutations"}
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button title="e"
              type="const"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button title="π"
              type="const"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="mr"
              type="const"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="×10"
              type="function"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
              title="log"
              type="function"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button title="|x|"
              type="function"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button title="rand"
              type="function"
              color_word="green"
              background="white"
              fontSize='2.7'
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ modeChange, data }) => ({
  mode: modeChange.mode,
  rad_to_deg: data.rad_to_deg
})

export default connect(mapStateToProps, null)(FunctionButon);