import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import Home from './Home';
import Input from './Input';
import KeyboardAvoid from './KeyboardAvoid';
import KeyboardAware from './KeyboardAware';
import AutoFocus from './AutoFocus';

export default function Main() {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    {key: 'home', title: 'Home', focusedIcon: 'home'},
    {key: 'input', title: 'Input', focusedIcon: 'apple-keyboard-command'},
    {key: 'avoid', title: 'KeyboardAvoid', focusedIcon: 'keyboard-variant'},
    {
      key: 'aware',
      title: 'KeyboardAware',
      focusedIcon: 'keyboard-settings-outline',
    },
    {key: 'auto', title: 'AutoFocus', focusedIcon: 'home-automation'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    input: Input,
    avoid: KeyboardAvoid,
    aware: KeyboardAware,
    auto: AutoFocus,
  });
  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
