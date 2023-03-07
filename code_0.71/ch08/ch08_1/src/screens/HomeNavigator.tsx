import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {useNavigationHorizontalInterpolator} from '../hooks';
import Home from './Home';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const interpolator = useNavigationHorizontalInterpolator();
  const leftOptions = useMemo<NativeStackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal',
      cardStyleInterpolator: interpolator,
    }),
    [],
  );
  const rightOptions = useMemo<NativeStackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal',
      cardStyleInterpolator: interpolator,
    }),
    [],
  );
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="HomeLeft"
        component={HomeLeft}
        options={leftOptions}
      />
      <Stack.Screen
        name="HomeRight"
        component={HomeRight}
        options={rightOptions}
      />
    </Stack.Navigator>
  );
}
