import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const BottomNavAnimation = () => {
  const [selectedtab, setselectedtab] = useState(0);

  const aniamtedX = useSharedValue(0);
  const animatedY = useSharedValue(0);
  const animatedBtn1Y = useSharedValue(0);
  const animatedBtn2Y = useSharedValue(0);
  const animatedBtn3Y = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: aniamtedX.value}, {translateY: animatedY.value}],
    };
  });

  const animatedBtnStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn1Y.value}],
    };
  });

  const animatedBtnStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn2Y.value}],
    };
  });

  const animatedBtnStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn3Y.value}],
    };
  });

  useEffect(() => {
    if (selectedtab == 0) {
      animatedY.value = withTiming(50, {duration: 500});
      setTimeout(() => {
        aniamtedX.value = withTiming(0, {duration: 500});
      }, 500);
      setTimeout(() => {
        animatedBtn1Y.value = withTiming(-200, {duration: 500});
        animatedY.value = withTiming(-150, {duration: 500});
        setTimeout(() => {
          animatedY.value = withTiming(0, {duration: 500});
          animatedBtn1Y.value = withTiming(0, {duration: 500});
        }, 500);
      }, 1000);
    } else if (selectedtab == 1) {
      animatedY.value = withTiming(50, {duration: 500});
      setTimeout(() => {
        aniamtedX.value = withTiming(116, {duration: 500});
      }, 500);
      setTimeout(() => {
        animatedBtn2Y.value = withTiming(-200, {duration: 500});
        animatedY.value = withTiming(-150, {duration: 500});
        setTimeout(() => {
          animatedY.value = withTiming(0, {duration: 500});
          animatedBtn2Y.value = withTiming(0, {duration: 500});
        }, 500);
      }, 1000);
    } else {
      animatedY.value = withTiming(50, {duration: 500});
      setTimeout(() => {
        aniamtedX.value = withTiming(235, {duration: 500});
      }, 500);
      setTimeout(() => {
        animatedBtn3Y.value = withTiming(-200, {duration: 500});
        animatedY.value = withTiming(-150, {duration: 500});
        setTimeout(() => {
          animatedY.value = withTiming(0, {duration: 500});
          animatedBtn3Y.value = withTiming(0, {duration: 500});
        }, 500);
      }, 1000);
    }
  }, [selectedtab]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: 'white',
          elevation: 5,
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Animated.View
          style={[
            {
              width: 60,
              height: 60,
              borderRadius: 30,
              position: 'absolute',
              backgroundColor: 'orange',
            },
            animatedStyle,
          ]}></Animated.View>
        <AnimatedBtn
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
              width: 60,
            },
            animatedBtnStyle1,
          ]}
          onPress={() => {
            setselectedtab(0);
          }}>
          <Image
            source={require('./images/user.png')}
            style={{width: 25, height: 25}}
          />
        </AnimatedBtn>
        <AnimatedBtn
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
              width: 60,
            },
            animatedBtnStyle2,
          ]}
          onPress={() => {
            setselectedtab(1);
          }}>
          <Image
            source={require('./images/user.png')}
            style={{width: 25, height: 25}}
          />
        </AnimatedBtn>
        <AnimatedBtn
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
              width: 60,
            },
            animatedBtnStyle3,
          ]}
          onPress={() => {
            setselectedtab(2);
          }}>
          <Image
            source={require('./images/user.png')}
            style={{width: 25, height: 25}}
          />
        </AnimatedBtn>
      </View>
    </View>
  );
};

export default BottomNavAnimation;
