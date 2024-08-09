import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const InterpolateAnimation = () => {
  const [clicked, setclicked] = useState(false);
  const animation = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(animation.value, [1, 0], [100, 200]);
    const backgroundColor = interpolate(
      animation.value,
      [1, 0],
      ['orange', 'purple'],
    );
    return {
      width: width,
      height: width,
      backgroundColor,
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'orange',
          },
          animatedStyle,
        ]}></Animated.View>
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          marginTop: 30,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}
        onPress={() => {
          if (clicked) {
            animation.value = withSpring(1);
          } else {
            animation.value = withSpring(0);
          }
          setclicked(!clicked);
        }}>
        <Text style={{color: 'white'}}>Animate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InterpolateAnimation;
