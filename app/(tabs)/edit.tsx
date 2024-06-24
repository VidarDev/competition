import React, { useState } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useUser } from '@/src/context/UserContext';
import { useTheme } from '@/src/context/ThemeContext';
import { Stack, router, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import ThemedPageContainer from '@/components/common/ThemedPageContainer';

const EditScreen = () => {
  const { themeColor } = useTheme();

  const { t } = useTranslation();

  const { user, isLoggedIn, setUser, logOut } = useUser();
  const [newUser, setNewUser] = useState(user);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          // headerTitle: 'Test',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ marginLeft: 20, backgroundColor: '#fff', padding: 6, borderRadius: 10 }}>
              <Ionicons name="chevron-back" size={32} color={'#2C2829'} />
            </TouchableOpacity>
          ),
        }}
      />
      <ThemedPageContainer>
        <View style={[styles.page]}>
          <TextInput value={newUser} onChangeText={setNewUser} />
          <TouchableOpacity
            onPress={() => {
              setUser(newUser);
              router.back();
            }}
            style={{ marginLeft: 8, backgroundColor: '#fff', padding: 6, borderRadius: 10 }}>
            <Ionicons name="compass" size={32} color={'#2C2829'} />
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
});

export default EditScreen;
