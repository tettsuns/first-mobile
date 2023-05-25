import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { Button } from "@react-native-material/core";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B1E19C",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backgroundCircle: {
    position: "absolute",
    bottom: 0,
    width: windowWidth * 1.1,
    height: windowWidth,
    borderRadius: windowWidth / 2,
    backgroundColor: "#61AF82",
    transform: [{ translateY: windowWidth / 2.8 }],
    zIndex: -1,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
    marginTop: 100,
  },
  slogan: {
    fontSize: 20,
    marginBottom: 40,
    color: "#118540",
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonWrapper: {
    width: "85%",
    borderRadius: 35,
    overflow: "hidden",
    marginBottom: 30,
    justifyContent: "center",
  },
  button: {
    height: 75,
    backgroundColor: "#118540",
    color: "#FFFFFF",
    padding: 18,
  },
  buttonText: {
    fontSize: 22,
    textAlign: "center",
  },
  copyrightText: {
    fontSize: 12,
    color: "#118540",
    textAlign: "center",
    marginTop: "auto",
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")} style={styles.logo} />
      <Text style={styles.slogan}>RIDE TOGETHER, SAVE THE PLANET!</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title="LOGIN"
            mode="contained"
            onPress={() => alert("Login button clicked!")}
            style={styles.button}
            titleStyle={styles.buttonText}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="REGISTER"
            mode="contained"
            onPress={() => alert("Register button clicked!")}
            style={styles.button}
            titleStyle={styles.buttonText}
          />
        </View>
      </View>
      <View style={styles.backgroundCircle} />
      <Text style={styles.copyrightText}>
        &copy; {new Date().getFullYear()} EcoRide
      </Text>
    </View>
  );
};

export default App;
