import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import LifeCycle from './LifeCycle';
import Timer from './Timer';
import Interval from './Interval';
import Fetch from './Fetch';

export default function MainNavigator() {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    {key: 'life', title: 'LifeCycle', focusedIcon: 'page-layout-header-footer'},
    {key: 'timer', title: 'Timer', focusedIcon: 'clock-time-four'},
    {key: 'interval', title: 'Interval', focusedIcon: 'timeline'},
    {key: 'fetch', title: 'Fetch', focusedIcon: 'history'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    life: LifeCycle,
    timer: Timer,
    interval: Interval,
    fetch: Fetch,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
