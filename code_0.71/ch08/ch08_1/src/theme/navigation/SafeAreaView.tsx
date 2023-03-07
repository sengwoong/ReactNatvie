import React from 'react';
import type {FC, ComponentProps, PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';

export type SafeAreaViewProps = ComponentProps<typeof RNSafeAreaView>;

export const SafeAreaView: FC<PropsWithChildren<SafeAreaViewProps>> = ({
  style,
  children,
  ...props
}) => {
  return (
    <RNSafeAreaView style={[styles.flex, style]} {...props}>
      {children}
    </RNSafeAreaView>
  );
};
const styles = StyleSheet.create({
  flex: {flex: 1},
});
