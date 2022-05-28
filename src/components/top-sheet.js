import { View, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Text from "./text/text";
import { colors } from "../theme/colors";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { spacing } from "../theme/spacing";
import { Ionicons } from "@expo/vector-icons";

export default function TopSheet() {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <Entypo name="menu" size={24} color="white" />
        <SimpleLineIcons name="bell" size={24} color="white" />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text preset="h1" style={{ marginTop: 20 }}>
          Covid -19
        </Text>
        <View style={styles.rightBox}>
          <Image source={require("../../assets/usaVector.png")} />
          <Text preset="h2" style={{ marginLeft: 6, color: colors.black }}>
            USA
          </Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </View>
      </View>

      <View>
        <Text preset="h2" style={{ marginTop: 30 }}>
          Are you felling Sick?
        </Text>
        <Text preset="small" style={{ marginTop: 8 }}>
          If you sick with any of covid- 19 sympotoms please call or SMS us
          immediately for help.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Pressable style={styles.pressCall}>
          <Ionicons name="call" size={24} color="white" />
          <Text style={{ marginLeft: 10 }}>Call Now</Text>
        </Pressable>
        <Pressable style={styles.pressChat}>
          <Ionicons name="chatbubble" size={24} color="white" />
          <Text style={{ marginLeft: 10 }}>Send SMS</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingTop: 50,
    height: "50%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 20,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing[4],
  },
  rightBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: colors.white,
    padding: spacing[1],
    borderRadius: 30,
  },
  pressCall: {
    flexDirection: "row",
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[5],
    backgroundColor: colors.melon,
    borderRadius: 25,
    alignItems: "center",
  },
  pressChat: {
    flexDirection: "row",
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[5],
    backgroundColor: colors.waterBlue,
    borderRadius: 25,
    alignItems: "center",
  },
});
