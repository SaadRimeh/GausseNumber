import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function GameScreen({ goHome }) {
  const [random] = useState(50);  
  const [guess, setGuess] = useState("");
  const [chances, setChances] = useState(5);

  const checkGuess = () => {
    const num = parseInt(guess);

    if (num === random) {
      Alert.alert("Correct!", "You guessed the number!");
      goHome();
      return;
    }

    if (chances === 1) {
      Alert.alert("Game Over", `The number was: ${random}`);
      goHome();
      return;
    }

    setChances(chances - 1);

    if (num < random) {
      Alert.alert("Wrong!", "The number is BIGGER");
    } else {
      Alert.alert("Wrong!", "The number is SMALLER");
    }

    setGuess("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the 2-digit number</Text>
      <Text style={{ marginBottom: 10 }}>Chances Left: {chances}</Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={guess}
        onChangeText={setGuess}
        placeholder="Enter number"
      />

      <TouchableOpacity style={styles.btn} onPress={checkGuess}>
        <Text style={styles.btnText}>Check</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.btn, { backgroundColor: "gray" }]} 
        onPress={goHome}
      >
        <Text style={styles.btnText}>Back Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,
     justifyContent: "center",
      alignItems: "center" },
  title: {
     fontSize: 24,
      marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 12,
    width: 160,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20
  },
  btn: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    width: 150,
    alignItems: "center"
  },
  btnText: { color: "white", fontSize: 18 }
});
