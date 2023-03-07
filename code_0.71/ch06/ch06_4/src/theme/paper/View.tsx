import React from 'react';
import type {FC, ComponentProps, PropsWithChildren} from 'react';
import {View as RNView} from 'react-native';
import {useTheme} from 'react-native-paper';

export type ViewProps = ComponentProps<typeof RNView> & {
  accent?: boolean;
  notification?: boolean;
  primary?: boolean;
  surface?: boolean;
  background?: boolean;
};

export const View: FC<PropsWithChildren<ViewProps>> = ({
  style,
  accent,
  notification,
  primary,
  surface,
  background,
  ...props
}) => {
  const {colors} = useTheme();
  const backgroundColor = accent
    ? colors.elevation.level0
    : notification
    ? colors.secondary
    : primary
    ? colors.primary
    : surface
    ? colors.surface
    : background
    ? colors.background
    : 'transparent';
  return <RNView style={[{backgroundColor}, style]} {...props} />;
};
