import React, { Component } from 'react';
import { WebView } from 'react-native';

class App4 extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://tokopedia.com'}}
        style={{marginTop: 20}}
      />
    );
  }
}
export default App4