import { StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";

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
