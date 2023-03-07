import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import PanRes from './PanRes';
import Drag from './Drag';
import LeftSwipe from './LeftSwipe';

export default function MainNavigator() {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    {key: 'panRes', title: 'PanRes', focusedIcon: 'drag'},
    {key: 'drag', title: 'Drag', focusedIcon: 'drag-horizontal'},
    {key: 'leftSwipe', title: 'LeftSwipe', focusedIcon: 'arrow-expand-right'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    panRes: PanRes,
    drag: Drag,
    leftSwipe: LeftSwipe,
  });
  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
