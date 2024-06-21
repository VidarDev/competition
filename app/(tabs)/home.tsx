import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useName } from '@/src/context/NameContext';
import { router } from 'expo-router';

const HomeScreen = () => {
  const { name } = useName();

  return (
    <View style={[styles.container]}>
      <Text>Name: {name}</Text>
      <Button title="Edit Name" onPress={() => router.navigate('edit')} />
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

export default HomeScreen;
