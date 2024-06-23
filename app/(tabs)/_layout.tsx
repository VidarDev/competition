import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import i18n from '@/src/i18n';
import { useTranslation } from 'react-i18next';
import { Platform, View } from 'react-native';

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
          padding: 8,
          height: Platform.OS === 'ios' ? 90 : 60,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: t('Home'),
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="home" size={32} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="albums"
        options={{
          title: t('Albums'),
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="book" size={32} color={color} />
            </View>
          ),
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
                top: -64 / 2 - 20,
                backgroundColor: '#FF6819',
                paddingHorizontal: 12,
                paddingVertical: 12,
                borderRadius: 999,
                aspectRatio: 1,
                width: 40 + 12 * 2 + 10 * 2,
                height: 40 + 12 * 2 + 10 * 2,
                borderWidth: 10,
                borderColor: '#FFEAD9',
              }}>
              <Ionicons name="add-outline" size={40} color={'#fff'} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="redirectrewards"
        options={{
          title: t('Rewards'),
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="star" size={32} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="redirectprofile"
        options={{
          title: t('Profile'),
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="person" size={32} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
