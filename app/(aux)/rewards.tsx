import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import ThemedPageContainer from '@/components/common/ThemedPageContainer';
import { useTheme } from '@/src/context/ThemeContext';

const RewardsScreen = () => {
  const { themeColor } = useTheme();

  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: 'Rewards',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.navigate({ pathname: '(tabs)/home' })}
              style={{}}>
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
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => router.navigate({ pathname: 'profil/home' })}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Modal</Text>
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
    backgroundColor: '#FF6819',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 16,
  },
});

export default RewardsScreen;
