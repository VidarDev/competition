import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import ThemedPageContainer from '@/components/common/ThemedPageContainer';
import { useTheme } from '@/src/context/ThemeContext';

const AlbumsScreen = () => {
  const { themeColor } = useTheme();

  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ThemedPageContainer>
        <View style={[styles.page]}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => router.navigate({ pathname: '(tabs)/home' })}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{t('Home')}</Text>
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
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 16,
  },
});

export default AlbumsScreen;
