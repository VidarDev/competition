import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useUser } from '@/src/context/UserContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import { TextInput } from 'react-native-paper';

const EditScreen = () => {
  const { user, isLoggedIn, setUser, logOut } = useUser();
  const [newUser, setNewUser] = useState(user);

  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EditScreen;
