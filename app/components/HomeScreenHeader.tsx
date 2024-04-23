import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigateProps } from "../../type";

interface Props {
  userImage: any;
  userName: string;
}

const HomeScreenHeader = ({ userImage, userName }: Props) => {
  const navigation = useNavigation<HomeScreenNavigateProps>();
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <Image
            source={userImage}
            style={{ marginRight: 10, width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.userName}>Hi, {userName}</Text>
          <Text style={styles.welceomMessage}>How is your health today?</Text>
        </View>
      </View>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 70,
    height: 70,
  },
  userName: {
    fontWeight: "bold",
  },
  welceomMessage: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.lightGray,
  },
});

export default HomeScreenHeader;
