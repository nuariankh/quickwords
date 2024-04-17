import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Main from './screens/MainComponent';
import { DefaultTheme } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';

const appTheme = {
    ...DefaultTheme,
    colors: {
        primary: '#FFCC00',
        secondary: '#6C757D',
        tertiary: '#800020'
    }
}

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={appTheme}>
        <Main />
      </PaperProvider>
    </NavigationContainer>
  );
}

