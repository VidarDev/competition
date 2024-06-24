import { View, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/src/context/ThemeContext';

const Modal = () => {
  const { themeColor } = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                marginTop: 16,
                marginLeft: Platform.OS === 'ios' ? 0 : 0,
                backgroundColor: themeColor.background,
                padding: 6,
                borderRadius: 10,
              }}>
              <Ionicons name="close" size={32} color={'#2C2829'} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.page]}>
        <LinearGradient
          colors={[themeColor.primary, themeColor.secondary]}
          start={{ x: 0.0, y: 1 }}
          end={{ x: 1.25, y: -0.25 }}
          locations={[0.13, 0.9]}
          style={[styles.page, { width: wp(100) }]}>
          <StatusBar style="auto" />

          {/*Logo image*/}
          <View>
            <Image
              style={{ width: 200, height: 200, borderRadius: 999 }}
              resizeMode="contain"
              source={{
                uri: 'https://picsum.photos/id/237/200/200',
              }}
            />
          </View>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Modal;
