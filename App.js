import React from 'react';
import {View, Text} from 'react-native';

// Look at public/index.html!

class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#44bb44',
        }}>
        <View>
          <Text color="#ffffff">Hello World</Text>
        </View>
      </View>
    );
  }
}

export default App;
