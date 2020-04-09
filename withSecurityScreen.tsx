import React from 'react';
import {View, AppState, Platform} from 'react-native';

const SecurityScreen = () => <View />;

const showSecurityScreenFromAppState = (appState: any) =>
  ['background', 'inactive'].includes(appState);

const withSecurityScreenIOS = (Wrapped:any) => {
  return class WithSecurityScreen extends React.Component {
    state = {
      showSecurityScreen: showSecurityScreenFromAppState(AppState.currentState),
    };

    componentDidMount() {
      AppState.addEventListener('change', this.onChangeAppState);
    }

    componentWillUnmount() {
      AppState.removeEventListener('change', this.onChangeAppState);
    }

    onChangeAppState = (nextAppState: any) => {
      const showSecurityScreen = showSecurityScreenFromAppState(nextAppState);

      this.setState({showSecurityScreen});
    };

    render() {
      return (
        <>
          {this.state.showSecurityScreen ? (
            <SecurityScreen />
          ) : (
            <Wrapped {...this.props} />
          )}
     
        </>
      );
    }
  };
};

const withSecurityScreenAndroid = (Wrapped: any) => Wrapped;

export const withSecurityScreen =
  Platform.OS === 'ios' ? withSecurityScreenIOS : withSecurityScreenAndroid;
