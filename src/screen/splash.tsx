import React from 'react';
import {Animated, View, StyleSheet} from 'react-native';

const Splash = () => {
  const imageScale = new Animated.Value(0.1);
  Animated.timing(imageScale, {
    toValue: 1,
    duration: 1300,
    useNativeDriver: true,
  }).start();
  return (
    <View testID="splashScreen" style={styles.container}>
      <Animated.Image
        testID="splashScreenImage"
        source={require('../assets/SwapFrom.png')}
        style={[styles.image, {transform: [{scale: imageScale}]}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  image: {
    alignSelf: 'center',
    alignItems: 'center',
    //flex: 1,
  },
});

export default Splash;
