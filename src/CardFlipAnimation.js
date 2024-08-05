import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const CardFlipAnimation = () => {
  const spin = useSharedValue(0);
  const frontStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [{rotateY: withTiming(`${spinValue}deg`)}],
    };
  });

  const backStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [{rotateY: withTiming(`${spinValue}deg`)}],
    };
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Animated.View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              width: 250,
              height: 400,
              backgroundColor: 'white',
              position: 'absolute',
            },
            frontStyle,
          ]}>
          <Image
            source={require('./images/car.jpg')}
            style={{height: '100%', width: '100%', borderRadius: 15}}
          />
        </Animated.View>
        <Animated.View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              width: 250,
              height: 400,
              backgroundColor: 'white',
              // position: 'absolute',
              backfaceVisibility: 'hidden',
            },
            backStyle,
          ]}>
          <Image
            source={require('./images/cart.png')}
            style={{height: '100%', width: '100%', borderRadius: 15}}
          />
        </Animated.View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          marginTop: 30,
          width: 150,
          height: 50,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          spin.value = spin.value == 0 ? 1 : 0;
        }}>
        <Text style={{color: 'white'}}>Flip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardFlipAnimation;
