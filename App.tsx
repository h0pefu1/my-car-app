/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Main from './src/router/Main';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';




function App(): React.JSX.Element {

  return (
      <>

      <PaperProvider>
      <NavigationContainer>
      <Main/>
      </NavigationContainer>
      </PaperProvider>
      </>
  );
}

export default App;
