import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {withSecurityScreen} from './withSecurityScreen';

const App = () => {
  const createWebView = (uri : string) => {
    return (
      <WebView
        source={{
          uri: uri,
        }}
      />
    );
  };

  return (
    <View>
      <View style={{height: '100%'}}>{createWebView('http://mrmaghawrystudents.com/login')}</View>
    </View>
  );
};

export default withSecurityScreen(App);
