/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Main from './src/router/Main';
import { PaperProvider } from 'react-native-paper';




function App(): React.JSX.Element {

  return (
      <>
      <PaperProvider>
      <Main/>
      </PaperProvider>
      </>
  );
}

export default App;
