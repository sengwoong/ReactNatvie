import React, {useState, useRef, useCallback} from 'react';
import {StyleSheet, Switch} from 'react-native';
import {useTheme} from 'react-native-paper';
// prettier-ignore
import {useToggleTheme, AutoFocusProvider, useAutoFocus} from '../contexts'
import {Text, View} from '../theme/paper';
import * as D from '../data';
import ImperativeTextInput from './ImperativeTextInput';
import type {TextInputMethods} from './ImperativeTextInput';

export default function Imperative() {
  const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson());
  const {dark, colors} = useTheme();
  const toggleTheme = useToggleTheme();
  const autoFocus = useAutoFocus();
  const methodsRef = useRef<TextInputMethods | null>(null);
  const setFocus = useCallback(() => {
    methodsRef.current?.focus();
  }, []);
  const dismissKeyboard = useCallback(() => {
    methodsRef.current?.dismiss();
  }, []);

  return (
    <View
      style={[
        styles.view,
        {
          backgroundColor: colors.background,
        },
      ]}>
      <View accent style={[styles.topBar]}>
        <Text
          onPress={setFocus}
          style={[styles.textButton, {color: colors.primary}]}>
          focus
        </Text>
        <Text
          onPress={dismissKeyboard}
          style={[styles.textButton, {color: colors.primary}]}>
          dismiss keyboard
        </Text>
        <View style={{flex: 1}} />
        <Switch value={dark} onValueChange={toggleTheme} />
      </View>
      <AutoFocusProvider contentContainerStyle={[styles.flex]}>
        <View style={{flex: 1}} />
        <View style={[styles.textView]}>
          <Text style={[styles.text, {color: colors.primary}]}>email</Text>
          <ImperativeTextInput
            style={[styles.textInput, {color: colors.primary}]}
            onFocus={autoFocus}
            value={person.email}
            placeholder="enter your email"
            onChangeText={email => setPerson(person => ({...person, email}))}
          />
        </View>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {color: colors.primary}]}>name</Text>
          <ImperativeTextInput
            ref={methodsRef}
            style={[styles.textInput, {color: colors.primary}]}
            onFocus={autoFocus}
            value={person.name}
            placeholder="enter your name"
            onChangeText={name => setPerson(person => ({...person, name}))}
          />
        </View>
      </AutoFocusProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  textButton: {marginLeft: 10, fontSize: 20},
  textView: {padding: 5},
  text: {fontSize: 24},
  textInput: {fontSize: 24, borderWidth: 1, borderRadius: 5},
  flex: {flex: 1},
});
