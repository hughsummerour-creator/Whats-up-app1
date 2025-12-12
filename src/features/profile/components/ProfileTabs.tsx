import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export type ProfileTabType = 'grid' | 'saved' | 'tagged';

interface ProfileTabsProps {
  activeTab: ProfileTabType;
  onTabChange: (tab: ProfileTabType) => void;
}

export const ProfileTabs = ({ activeTab, onTabChange }: ProfileTabsProps) => {
  const tabs: { key: ProfileTabType; icon: string; label: string }[] = [
    { key: 'grid', icon: '▦', label: 'Posts' },
    { key: 'saved', icon: '🔖', label: 'Saved' },
    { key: 'tagged', icon: '👤', label: 'Tagged' },
  ];

  return (
    <View className="flex-row bg-white border-b border-gray-200">
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          onPress={() => onTabChange(tab.key)}
          className={`flex-1 py-3 items-center border-b-2 ${
            activeTab === tab.key ? 'border-gray-900' : 'border-transparent'
          }`}
        >
          <Text
            className={`text-lg ${
              activeTab === tab.key ? 'opacity-100' : 'opacity-40'
            }`}
          >
            {tab.icon}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

