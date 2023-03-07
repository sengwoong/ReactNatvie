import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {
  View,
  Text,
  NavigationHeader,
  UnderlineText,
  Switch,
  MaterialCommunityIcon as Icon,
} from '../theme';
import type {FC, PropsWithChildren} from 'react';
import type {DrawerContentComponentProps} from '@react-navigation/drawer';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Avatar} from '../components';
import * as D from '../data';
import type {AppState} from '../store';
import type {User} from '../store/login';

const DrawerContent: FC<
  PropsWithChildren<DrawerContentComponentProps>
> = props => {
  const loggedIn = useSelector<AppState, boolean>(
    state => state.login.loggedIn,
  );
  const loggedUser = useSelector<AppState, User>(
    state => state.login.loggedUser,
  );
  const {email, name} = loggedUser;

  const {navigation} = props;
  const close = useCallback(
    () => navigation.dispatch(DrawerActions.closeDrawer()),
    [navigation],
  );
  if (!loggedIn) {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
        <NavigationHeader
          Right={() => <Icon name="close" size={24} onPress={close} />}
        />
        <View style={[styles.content]}>
          <Text style={[styles.text]}>Please login or signup.</Text>
          <View style={[styles.row, {marginTop: 20}]}>
            <Switch />
          </View>
        </View>
      </DrawerContentScrollView>
    );
  }
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
      <NavigationHeader
        Right={() => <Icon name="close" size={24} onPress={close} />}
      />
      <View style={[styles.content]}>
        <View style={[styles.row]}>
          <Avatar uri={D.avatarUriByName(name)} size={40} />
          <Text style={[styles.text, styles.m]}>{name}</Text>
        </View>
        <View style={[styles.row]}>
          <UnderlineText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.text, styles.m]}>
            {email}
          </UnderlineText>
        </View>
        <View style={[styles.row, {marginTop: 20}]}>
          <Switch />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
export default DrawerContent;
const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  row: {flexDirection: 'row', padding: 5, alignItems: 'center'},
  m: {marginLeft: 5},
  text: {fontSize: 20},
  content: {flex: 1, padding: 5},
});
