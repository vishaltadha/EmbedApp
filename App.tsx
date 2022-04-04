/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  BackHandler,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import WebView from 'react-native-webview';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  let webviewRef: any;

  const onAndroidBackPress = () => {
    if (webviewRef) {
      webviewRef.goBack();
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
    }
  }, []);

  return (
    <WebView
      ref={webview => {
        webviewRef = webview;
      }}
      javaScriptEnabled={true}
      setSupportMultipleWindows={true}
      source={{
        html: `
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <a href="https://www.google.com">Go to another page</a>
          <div>Counter: <span id="counterVal">0</span></div>
          <button onclick="incrementCounter()">Counter++</button>

          <script>

            function incrementCounter() {
              let statusEl = document.getElementById('counterVal');
              statusEl.innerText = ++statusEl.innerText;
            }
          
          </script>
        `,
      }}
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
