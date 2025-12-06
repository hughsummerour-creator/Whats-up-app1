import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import type { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

// Placeholder screens - will be replaced with actual feature screens
const PlaceholderScreen = ({ name }: { name: string }) => (
  <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
    <Text className="text-2xl font-bold text-gray-900 dark:text-white">{name}</Text>
    <Text className="mt-2 text-gray-500 dark:text-gray-400">Coming soon...</Text>
  </View>
);

const HomeScreen = () => <PlaceholderScreen name="Home" />;
const ExploreScreen = () => <PlaceholderScreen name="Explore" />;
const MapScreen = () => <PlaceholderScreen name="Map" />;
const SavedScreen = () => <PlaceholderScreen name="Saved" />;
const ProfileScreen = () => <PlaceholderScreen name="Profile" />;

// Simple icon component (will replace with proper icons later)
const TabIcon = ({ name, focused }: { name: string; focused: boolean }) => (
  <View className={`items-center justify-center ${focused ? 'opacity-100' : 'opacity-50'}`}>
    <Text className="text-lg">{getIconForTab(name)}</Text>
  </View>
);

const getIconForTab = (name: string): string => {
  switch (name) {
    case 'Home':
      return '🏠';
    case 'Explore':
      return '🔍';
    case 'Map':
      return '🗺️';
    case 'Saved':
      return '❤️';
    case 'Profile':
      return '👤';
    default:
      return '•';
  }
};

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => <TabIcon name={route.name} focused={focused} />,
        tabBarActiveTintColor: '#e25c50',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#e5e7eb',
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen 
        name="Explore" 
        component={ExploreScreen}
        options={{ tabBarLabel: 'Explore' }}
      />
      <Tab.Screen 
        name="Map" 
        component={MapScreen}
        options={{ tabBarLabel: 'Map' }}
      />
      <Tab.Screen 
        name="Saved" 
        component={SavedScreen}
        options={{ tabBarLabel: 'Saved' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

