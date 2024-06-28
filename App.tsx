import React from 'react';
import Main from './src/router/Main';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <>
      <PaperProvider>
          <Main />
      </PaperProvider>
    </>
  );
}

export default App;
