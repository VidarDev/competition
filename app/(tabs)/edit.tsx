import React, { useState } from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useUser } from '@/src/context/UserContext';
import { Stack, router } from 'expo-router';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const EditScreen = () => {
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
            <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 8 }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 6,
                  borderRadius: 10,
                }}>
                <Ionicons name="compass" size={32} color={'#2C2829'} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container]}>
        <TextInput value={newUser} onChangeText={setNewUser} />
        <Button
          title="Save"
          onPress={() => {
            setUser(newUser);
            router.back();
          }}
        />
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
});

export default EditScreen;
