import { StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactNode, useState } from "react";
import colors from "../config/colors";
import NavigationBar from "../components/NavigationBar";

interface Props {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const Screen = ({ children, style }: Props) => {
  // const [user, setUser] = useState(true);
  {/* {user && <NavigationBar />} */}
  return <View style={[styles.screen, style]}>
    {children}
    </View>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    // backgroundColor: 'red',
  },
});

export default Screen;
