import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AniamtedImage = Animated.createAnimatedComponent(Image);
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);

const LayoutAnimation = () => {
  const animatedImgWidth = useSharedValue(100);
  const animatedImgHeight = useSharedValue(100);
  const animatedImgY = useSharedValue(0);
  const crossBtnScale = useSharedValue(0);
  const animatedView = useSharedValue(0);

  const animatedImgStyle = useAnimatedStyle(() => {
    return {
      width: animatedImgWidth.value,
      height: animatedImgHeight.value,
      transform: [{translateY: animatedImgY.value}],
    };
  });

  const crossBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: crossBtnScale.value}],
    };
  });

  const animatedViewStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedView.value}],
    };
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <AnimatedBtn
        style={[{height: 50, width: 50}, crossBtnStyle]}
        onPress={() => {
          animatedView.value = withTiming(0, {
            duration: 300,
          });
          crossBtnScale.value = withTiming(0, {duration: 500});
          animatedImgWidth.value = withTiming(100, {duration: 500});
          animatedImgHeight.value = withTiming(100, {duration: 500});
          animatedImgY.value = withTiming(0, {duration: 500});
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 20,
          }}>
          X
        </Text>
      </AnimatedBtn>
      <TouchableOpacity
        onPress={() => {
          if (animatedImgWidth.value == 100) {
            animatedView.value = withTiming(-Dimensions.get('window').width, {
              duration: 300,
            });
            crossBtnScale.value = withTiming(1, {duration: 500});
            animatedImgWidth.value = withTiming(430, {duration: 500});
            animatedImgHeight.value = withTiming(430, {duration: 500});
            animatedImgY.value = withTiming(130, {duration: 500});
          }
        }}>
        <AniamtedImage
          source={require('./images/profile.jpg')}
          style={[
            {height: 100, width: 100, resizeMode: 'contain'},
            animatedImgStyle,
          ]}
        />
      </TouchableOpacity>
      <Animated.View
        style={[
          {
            width: '90%',
            backgroundColor: 'black',
            height: 50,
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 30,
          },
          animatedViewStyle,
        ]}>
        <Text style={{color: 'white', alignSelf: 'center', marginTop: 15}}>
          03XXXXXXXXXXX
        </Text>
      </Animated.View>
    </View>
  );
};

export default LayoutAnimation;
