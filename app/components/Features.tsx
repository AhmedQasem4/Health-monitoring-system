import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  children: ReactNode;
  heading: string,
}

const Features = ({ heading,children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.childrenContainer}>
        {children}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
  },
  childrenContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Features;
