import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
//import {Colors} from 'react-native-paper'
import {MD2Colors as Colors} from 'react-native-paper';

console.log(Colors.blue500);
//console.log(Color(Colors.blue500).alpha(0.5).lighten(0.5).string())
export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>Hello StyleSheet world!</Text>
    </SafeAreaView>
  );
}
// prettier-ignore
const styles = StyleSheet.create({
safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center',
backgroundColor: Colors.blue500},
text: {fontSize: 20, color: Colors.blue100}
})
