import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ goToGame }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess The Number</Text>

      <TouchableOpacity 
        style={styles.btn} 
        onPress={goToGame}
      >
        <Text style={styles.btnText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 30, marginBottom: 25 },
  btn: { backgroundColor: "blue", padding: 15, borderRadius: 10 },
  btnText: { color: "white", fontSize: 18 }
});
