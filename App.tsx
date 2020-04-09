import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {withSecurityScreen} from './withSecurityScreen';

const App = () => {
  return (
    <View>
      <View style={{height: '100%'}}>
        <WebView
          source={{
            uri:
              'https://www.youtube.com/embed?v=9xhKH43llhU&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=1',
          }}
        />
      </View>
    </View>
  );
};

export default withSecurityScreen(App);
