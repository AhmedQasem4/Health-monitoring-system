import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import colors from "../config/colors";

interface Props {
  label: string;
}

const AppTextInput = ({ label }: Props) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    marginBottom: 30,
    fontSize: 15,
  },
  label: {
    fontWeight: '600',
    color: colors.lightGray,
  },
});

export default AppTextInput;
