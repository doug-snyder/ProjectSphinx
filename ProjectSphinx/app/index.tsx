import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>INDEX</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9BA1A6",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
  },
});
