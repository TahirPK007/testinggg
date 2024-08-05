import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {useSharedValue} from 'react-native-reanimated';

const App = () => {
  const animatedValue = useSharedValue(50);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          height: animatedValue,
          width: animatedValue,
          backgroundColor: 'red',
        }}></Animated.View>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          width: 100,
          height: 50,
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          animatedValue.value = animatedValue.value + 50;
        }}>
        <Text style={{color: 'white'}}>Increase size</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
