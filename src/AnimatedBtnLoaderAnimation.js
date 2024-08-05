import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedBtnLoaderAnimation = () => {
  const animatedWidth = useSharedValue(300);
  const animatedBorderadius = useSharedValue(20);
  const [btnclicked, setbtnclicked] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
      borderRadius: animatedBorderadius.value,
    };
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AnimatedBtn
        style={[
          {
            width: 300,
            height: 50,
            borderRadius: 20,
            backgroundColor: 'purple',
            justifyContent: 'center',
            alignItems: 'center',
          },
          animatedStyle,
        ]}
        onPress={() => {
          if (animatedWidth.value == 300) {
            animatedWidth.value = withTiming(60, {duration: 500});
            animatedBorderadius.value = withTiming(30, {duration: 500});
            setbtnclicked(true);
          } else {
            animatedWidth.value = withTiming(300, {duration: 500});
            animatedBorderadius.value = withTiming(20, {duration: 500});
            setbtnclicked(false);
          }
        }}>
        {btnclicked ? (
          <ActivityIndicator color={'white'} size={'large'} />
        ) : (
          <Text style={{color: 'white'}}>Login</Text>
        )}
      </AnimatedBtn>
    </View>
  );
};

export default AnimatedBtnLoaderAnimation;
