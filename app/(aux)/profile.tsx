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
          headerTitle: 'Profile',
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
      <View style={[styles.container]}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => router.navigate('(aux)/account/settings')}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => router.navigate('(aux)/account/settings')}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Paramètres</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#2C2829' }}>---------</Text>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => router.navigate('(aux)/subscription/premium')}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Passer au premium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => router.navigate('(aux)/subscription/restore-purchase')}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Restaurer un achat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => router.navigate('(aux)/subscription/invitation')}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Inviter un proche à collaborer</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#2C2829' }}>---------</Text>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => router.navigate('(aux)/help/assistance')}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Assistance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => router.navigate('(aux)/help/faq')}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>FAQ</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#2C2829' }}>---------</Text>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => router.navigate('(aux)/conditions-of-use')}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Condition d’utilisation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => router.navigate('(aux)/privacy-policy')}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Politique de confidentialité</Text>
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
