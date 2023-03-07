import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useColorScheme} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {useState, useCallback} from 'react';
import {ToggleThemeProvider} from './src/contexts';
import MainNavigator from './src/screens/MainNavigator';

enableScreens();

const App = () => {
  const scheme = useColorScheme(); // 'dark' 혹은 'light'
  const [theme, setTheme] = useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme,
  );

  const toggleTheme = useCallback(
    () => setTheme(({dark}) => (dark ? DefaultTheme : DarkTheme)),
    [],
  );
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <SafeAreaProvider>
          <NavigationContainer theme={theme}>
            <MainNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ToggleThemeProvider>
    </GestureHandlerRootView>
  );
};
export default App;
