import { View, StyleSheet, Image } from "react-native";
import React from "react";
import Text from "./text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function BottomSheet() {
  return (
    <View style={styles.container}>
      <Text preset="h1" style={{ color: colors.black, marginTop: spacing[4] }}>
        Prevention
      </Text>
      <View style={styles.preventionImage}>
        <View style={{ width: "30%" }}>
          <Image source={require("../../assets/p1.png")} />
          <Text preset="h3" style={styles.preventionText}>
            Avoid close contact
          </Text>
        </View>
        <View style={{ width: "30%" }}>
          <Image source={require("../../assets/p2.png")} />
          <Text preset="h3" style={styles.preventionText}>
            Avoid close contact
          </Text>
        </View>
        <View style={{ width: "30%" }}>
          <Image source={require("../../assets/p3.png")} />
          <Text preset="h3" style={styles.preventionText}>
            Avoid close contact
          </Text>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <Image
          style={{ marginTop: -30 }}
          source={require("../../assets/advice1.png")}
        />
        <View style={{ paddingLeft: spacing[4] }}>
          <Text preset="h2">Do your own test ?</Text>
          <Text preset="small">Follow the instructions to</Text>
          <Text preset="small">do your own test.</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
  },
  preventionImage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: spacing[5],
  },
  preventionText: {
    color: colors.black,
    textAlign: "center",
    marginTop: 6,
  },
  bottomBox: {
    backgroundColor: "rgba(86, 84, 158, 1)",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    padding: 10,
  },
});
