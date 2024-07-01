import React from 'react';
import Main from './src/router/Main';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import { CustomDarkTheme, CustomLightTheme } from './src/theme/theme';
import { useColorScheme } from 'react-native';
function App(): React.JSX.Element {
  const systemTheme = useColorScheme();
  const isDarkTheme = systemTheme === 'dark';
  const theme = isDarkTheme ? CustomDarkTheme : CustomLightTheme;

  return (
    <>
      <PaperProvider theme={theme}>
   <NavigationContainer theme={theme}>
          <Main />
          </NavigationContainer>
      </PaperProvider>
    </>
  );
}

export default App;
