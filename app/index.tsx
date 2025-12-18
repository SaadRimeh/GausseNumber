import React, { useState } from "react";
import { View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [screen, setScreen] = useState("home");

  return (
    <View style={{ flex: 1 }}>
      {screen === "home" ? (
        <HomeScreen goToGame={() => setScreen("game")} />
      ) : (
        <GameScreen goHome={() => setScreen("home")} />
      )}
    </View>
  );
}
