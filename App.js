
import React from 'react';
import { Stack, Button } from '@react-native-material/core';

const App = () => (
    <ImageBackground
      source={require('../assets/background-first.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <Image source={require('../assets/logo.png')} style={styles.image}></Image>
      <Text style={styles.header}>Login</Text>
      <Text style={styles.text}>
        The easiest way to start with your amazing application.
      </Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
})

export default App;