import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Button } from "react-native-paper";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.content}>
        <Image source={require("./logo.png")} style={styles.logo} />
        <Text style={styles.text}>Welcome to My App!</Text>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => console.log("Login pressed")}
          >
            Login
          </Button>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => console.log("Register pressed")}
          >
            Register
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Set your desired background color here
  },
  background: {
    position: "absolute",
    bottom: 0,
    left: -200,
    right: -200,
    height: 400,
    borderRadius: 400,
    backgroundColor: "#F2F2F2", // Set your desired circle color here
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    color: "white",
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "48%",
    marginBottom: 20,
  },
});

export default App;
