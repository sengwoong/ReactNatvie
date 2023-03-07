import 'react-native-gesture-handler';
import React, {useState, useCallback} from 'react';
import {useColorScheme} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// prettier-ignore
import {NavigationContainer, DefaultTheme, DarkTheme}
from '@react-navigation/native'

import {ToggleThemeProvider} from './src/contexts';
import MainNavigator from './src/screens/MainNavigator';

enableScreens();

export default function App() {
  const scheme = useColorScheme(); // 'dark' 혹은 'light'
  const [theme, setTheme] = useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme,
  );

  const toggleTheme = useCallback(
    () => setTheme(({dark}) => (dark ? DefaultTheme : DarkTheme)),
    [],
  );

  return (
    <ToggleThemeProvider toggleTheme={toggleTheme}>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ToggleThemeProvider>
  );
}
