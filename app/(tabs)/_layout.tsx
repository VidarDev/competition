import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import i18n from '@/src/i18n';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

export default function TabsLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#FF6819',
        tabBarInactiveTintColor: '#2C2829',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          padding: 0,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: t('Home'),
          tabBarIcon: ({ color }) => <Ionicons name="compass" size={32} color={color} />,
        }}
      />
      <Tabs.Screen
        name="edit"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: 'absolute',
                top: -64 / 2 - 10,
                backgroundColor: '#FF6819',
                paddingHorizontal: 12,
                paddingVertical: 12,
                borderRadius: 999,
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
                borderWidth: 10,
                borderColor: '#FFEAD9',
              }}>
              <Ionicons name="add-outline" size={40} color={'#fff'} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="albums"
        options={{
          title: t('Albums'),
          tabBarIcon: ({ color }) => <Ionicons name="compass" size={32} color={color} />,
        }}
      />
      <Tabs.Screen
        name="redirectprofil"
        options={{
          title: t('Profil'),
          tabBarIcon: ({ color }) => <Ionicons name="compass" size={32} color={color} />,
        }}
      />
    </Tabs>
  );
}
