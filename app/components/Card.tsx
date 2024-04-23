import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

interface Props {
  iconUri: ImageSourcePropType;
  width: number;
  label: string;
  onPress: ()=> void;
}

const Card = ({ iconUri, width, label, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, { width, height: width }]}>
      <Image
        source={iconUri}
        style={{ width: 0.5 * width, height: 0.5 * width, marginBottom: 10 }}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  label: {
    fontWeight: "600",
    fontSize: 12,
    textTransform: "uppercase",
  },
});

export default Card;
