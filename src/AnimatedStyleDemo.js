import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';

const AnimatedStyleDemo = () => {
  const h = useSharedValue(100);
  const w = useSharedValue(100);
  const r = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: w.value,
      height: h.value,
      borderRadius: r.value,
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            height: 100,
            width: 100,
            backgroundColor: 'red',
          },
          animatedStyle,
        ]}></Animated.View>
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
          if (w.value == 100) {
            // h.value = withSpring(200);
            // w.value = withSpring(200);
            // r.value = withSpring(100);
            h.value = withDelay(2000, withSpring(200));
            w.value = withDelay(2000, withSpring(200));
            r.value = withDelay(2000, withSpring(100));
          } else {
            // h.value = withSpring(100);
            // w.value = withSpring(100);
            // r.value = withSpring(0);
            h.value = withDelay(2000, withSpring(100));
            w.value = withDelay(2000, withSpring(100));
            r.value = withDelay(2000, withSpring(0));
          }
        }}>
        <Text style={{color: 'white'}}>Animate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedStyleDemo;

const styles = StyleSheet.create({});
