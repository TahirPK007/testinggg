import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const FloatingMenuAnimation = () => {
  const width = useSharedValue(0);
  const yValue = useSharedValue(60);
  const iconScale = useSharedValue(0);

  const menuStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      transform: [{translateY: yValue.value}],
    };
  });

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: iconScale.value}],
    };
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            backgroundColor: 'black',
            width: 300,
            height: 70,
            alignSelf: 'center',
            borderRadius: 35,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          },
          menuStyle,
        ]}>
        <Animated.Image
          source={require('./images/user.png')}
          style={[{width: 30, height: 30, tintColor: 'white'}, iconStyle]}
        />
        <Animated.Image
          source={require('./images/user.png')}
          style={[{width: 30, height: 30, tintColor: 'white'}, iconStyle]}
        />
        <Animated.Image
          source={require('./images/user.png')}
          style={[{width: 30, height: 30, tintColor: 'white'}, iconStyle]}
        />
        <Animated.Image
          source={require('./images/user.png')}
          style={[{width: 30, height: 30, tintColor: 'white'}, iconStyle]}
        />
      </Animated.View>
      <TouchableOpacity
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: 'black',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          if (width.value == 0) {
            width.value = withTiming(300, {duration: 300});
            yValue.value = withTiming(-50, {duration: 300});
            iconScale.value = withTiming(1, {duration: 500});
          } else {
            iconScale.value = withTiming(0, {duration: 500});
            width.value = withTiming(0, {duration: 300});
            yValue.value = withTiming(70, {duration: 300});
          }
        }}>
        <Image
          source={require('./images/user.png')}
          style={{width: 30, height: 30, tintColor: 'white'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingMenuAnimation;
