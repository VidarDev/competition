import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, Image } from 'react-native';
import i18n from '@/src/i18n';
import React, { useEffect } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { Stack, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const { t } = useTranslation();

  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(() => {
      ring1padding.value = withSpring(ring1padding.value + hp(4));
    }, 100);
    setTimeout(() => {
      ring2padding.value = withSpring(ring2padding.value + hp(4.5));
    }, 300);

    setTimeout(() => {
      router.replace('home');
    }, 500);
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
      />

      <View style={[styles.page]}>
        <LinearGradient
          colors={['#FF6819', '#FFF491']}
          start={{ x: 0.0, y: 1 }}
          end={{ x: 1.25, y: -0.25 }}
          locations={[0.13, 0.9]}
          style={[styles.page, { width: wp(100) }]}>
          <StatusBar style="auto" />

          {/*Logo image*/}
          <Animated.View style={[styles.ring, { padding: ring2padding }]}>
            <Animated.View style={[styles.ring, { padding: ring1padding }]}>
              <Image
                style={{ width: 200, height: 200, borderRadius: 999 }}
                resizeMode="contain"
                source={{
                  uri: 'https://picsum.photos/id/237/200/200',
                }}
              />
            </Animated.View>
          </Animated.View>
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFEAD9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 999,
  },
});
