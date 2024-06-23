import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { current } from '@react-native-community/cli-tools/build/releaseChecker';

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: 'Settings',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={{}}>
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 6,
                  borderRadius: 10,
                }}>
                <Ionicons name="chevron-back" size={32} color={'#2C2829'} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container]}>
        <TouchableOpacity style={[styles.button]} onPress={() => router.back()}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Go back</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEAD9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FF6819',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 16,
  },
});

export default HomeScreen;
