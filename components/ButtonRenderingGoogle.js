import { StyleSheet, TextInput, View, Button } from "react-native";
import React, { useState } from "react";
import GoogleData from "./GoogleData";

export default function ButtonRenderingGoogle({ setMarkers }) {
  const [render, setRender] = useState(true);
  const [text, onChangeText] = useState("Useless Text");

  function handleClick() {
    setRender(!render);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(value) => onChangeText(value)}
        placeholder="Eg. cafe"
      />
      <Button
        onPress={handleClick}
        title="Run API"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <GoogleData change={render} searchText={text} setMarkers={setMarkers} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
