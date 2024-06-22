import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useName } from '@/src/context/NameContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import { TextInput } from 'react-native-paper';

const EditScreen = () => {
  const { name, setName } = useName();
  const [newName, setNewName] = useState(name);

  return (
    <View style={[styles.container]}>
      <TextInput value={newName} onChangeText={setNewName} />
      <Button
        title="Save"
        onPress={() => {
          setName(newName);
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
