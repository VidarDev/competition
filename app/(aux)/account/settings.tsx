import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import ThemedPageContainer from '@/components/common/ThemedPageContainer';
import { useTheme } from '@/src/context/ThemeContext';

const SettingsScreen = () => {
  const { themeColor } = useTheme();

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
      <ThemedPageContainer>
        <View style={[styles.page]}>
          <TouchableOpacity style={[styles.button]} onPress={() => router.back()}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Go back</Text>
          </TouchableOpacity>
        </View>
      </ThemedPageContainer>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 16,
  },
});

export default SettingsScreen;
