import React from 'react';
import { View, Text, Image } from 'react-native';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1500
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <View style={{ flex: 3.5 }} />
        <View style={{ flex: 6.5, alignItems: 'center' }}>
          <Image
            style={{
              height: '35%', aspectRatio: 1 / 1, alignItems: 'center',
              justifyContent: 'center',
              resizeMode: 'cover'
            }}
            source={require('../Icon/icon.png')} />
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    backgroundColor: 'white'
  },
}

export default SplashScreen;