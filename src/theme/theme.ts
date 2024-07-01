

import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { MD3LightTheme as PaperLightTheme, MD3DarkTheme as PaperDarkTheme, PaperProvider } from 'react-native-paper';

  export const CustomLightTheme = {
    ...NavigationDefaultTheme,
    ...PaperLightTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperLightTheme.colors,
      primary: '#3498db',
      background: '#ffffff',
      card: '#f8f9fa',
      text: '#333333',
      myOwnColor: '#BADA55',
    },
  };
  
export const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      primary: '#3498db',
      background: '#000000',
      card: '#1c1c1c',
      text: '#ffffff',
      myOwnColor: '#BADA55',
    },
  };
  