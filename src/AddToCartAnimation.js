import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AddToCartAnimation = () => {
  const [count, setcount] = useState(0);
  const animateX = useSharedValue(0);
  const animateY = useSharedValue(0);
  const scale = useSharedValue(0);
  const scale2 = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: animateX.value},
        {translateY: animateY.value},
        {scale: scale.value},
      ],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale2.value}],
    };
  });

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('./images/car.jpg')}
        style={{
          width: '100%',
          height: 350,
        }}
      />

      <Text
        style={{
          color: 'black',
          marginTop: 10,
          marginLeft: 10,
          fontSize: 20,
          fontWeight: '600',
        }}>
        Description
      </Text>
      <Text style={{marginTop: 10, paddingHorizontal: 10}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500ss Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s Lorem
        Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
      </Text>
      <Animated.View
        style={[
          {
            backgroundColor: 'red',
            width: 30,
            height: 30,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            zIndex: 5,
          },
          animatedStyle,
        ]}>
        <Text style={{color: 'white'}}>{'+1'}</Text>
      </Animated.View>
      <TouchableOpacity
        style={{
          width: '50%',
          height: 40,
          borderWidth: 1,
          borderColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: 'black',
          marginTop: 20,
          borderRadius: 15,
        }}
        onPress={() => {
          if (animateX.value == 0) {
            scale.value = 1;
            animateX.value = withTiming(115, {duration: 1500});
            animateY.value = withTiming(-700, {duration: 1500});
            setTimeout(() => {
              scale.value = 0;
              scale2.value = withSpring(1.5);
              setcount(count + 1);
              animateX.value = withTiming(0, {duration: 1500});
              animateY.value = withTiming(0, {duration: 1500});
              setTimeout(() => {
                scale2.value = withSpring(1);
              }, 150);
            }, 1500);
          }
        }}>
        <Text style={{color: 'white'}}>Add to cart</Text>
      </TouchableOpacity>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 35,
          backgroundColor: 'white',
          position: 'absolute',
          top: 10,
          right: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./images/cart.png')}
          style={{height: 50, width: 50}}
        />
      </View>
      <Animated.View
        style={[
          {
            backgroundColor: 'red',
            width: 30,
            height: 30,
            borderRadius: 15,
            position: 'absolute',
            top: 10,
            right: 50,
            justifyContent: 'center',
            alignItems: 'center',
          },
          animatedStyle2,
        ]}>
        <Text style={{color: 'white'}}>{count}</Text>
      </Animated.View>
    </View>
  );
};

export default AddToCartAnimation;
