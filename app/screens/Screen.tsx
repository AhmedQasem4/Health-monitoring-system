import { StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const Screen = ({ children, style }: Props) => {
  return <View style={[styles.screen, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});

export default Screen;
