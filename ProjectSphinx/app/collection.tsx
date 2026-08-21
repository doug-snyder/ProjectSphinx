import { Text, View, StyleSheet } from "react-native";

export default function Collection() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>COLLECTION</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9BA1A6",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000000",
  },
});