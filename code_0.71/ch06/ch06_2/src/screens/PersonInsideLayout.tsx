import React, {useCallback} from 'react';
import type {FC} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import {MD2Colors as Colors} from 'react-native-paper';
// @ts-ignore
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome';
import * as D from '../data';
// prettier-ignore
import {useToggle, useAnimatedValue, useLayout, useTransformStyle} from '../hooks'
import {interpolate} from '../utils';
import {Avatar} from '../components';
import {styles} from './Person.style';

const AnimatedIcon = Animated.createAnimatedComponent(FontawesomeIcon);
const iconSize = 50;

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonInsideLayout: FC<PersonProps> = ({person, deletePressed}) => {
  const [started, toggleStarted] = useToggle(false);
  const animValue = useAnimatedValue(0);
  const avatarPressed = useCallback(
    () =>
      Animated.timing(animValue, {
        useNativeDriver: false,
        toValue: started ? 0 : 1,
        easing: Easing.bounce,
      }).start(toggleStarted),
    [started],
  );
  const [layout, setLayout] = useLayout();
  const iconAnimStyle = useTransformStyle(
    {
      translateX: interpolate(animValue, [0, layout.width - iconSize]),
      rotate: interpolate(animValue, ['0deg', '720deg']),
    },
    [layout.width],
  );
  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
        <Text style={[styles.text]}>Press Me</Text>
      </View>

      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]} onPress={avatarPressed}>
          {person.email}
        </Text>
        <View onLayout={setLayout} style={[{flexDirection: 'row', padding: 5}]}>
          <AnimatedIcon
            style={[iconAnimStyle]}
            name="soccer-ball-o"
            size={iconSize}
            color={Colors.blue500}
          />
        </View>
      </View>
    </View>
  );
};
export default PersonInsideLayout;
