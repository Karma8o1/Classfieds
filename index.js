/* eslint-disable react/react-in-jsx-scope */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import messaging from '@react-native-firebase/messaging';

const Root = () => {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  useEffect(() => {
    requestUserPermission();
  });
  return (
    <Provider store={store}>
      <App />
      <Toast ref={ref => Toast.setRef(ref)} />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => Root);
