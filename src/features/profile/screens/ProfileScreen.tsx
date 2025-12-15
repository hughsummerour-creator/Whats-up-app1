import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, iconColors } from '@/components/Icon';
import { ProfileHeader } from '../components/ProfileHeader';
import { ProfileHighlights } from '../components/ProfileHighlights';
import { ProfileTabs, type ProfileTabType } from '../components/ProfileTabs';
import { PhotoGrid } from '../components/PhotoGrid';
import { mockUser, mockPosts, mockHighlights } from '@/utils/mockData';

export const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState<ProfileTabType>('grid');

  const handleEditProfile = () => {
    console.log('Edit profile');
  };

  const handleSettings = () => {
    console.log('Settings');
  };

  const handlePostPress = (post: { id: string }) => {
    console.log('Post pressed:', post.id);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'grid':
        return <PhotoGrid posts={mockPosts} onPostPress={handlePostPress} />;
      case 'saved':
        return (
          <View className="flex-1 items-center justify-center py-20 bg-white">
            <Icon name="bookmark" size={48} color={iconColors.muted} />
            <Text className="text-lg font-semibold text-gray-900 mt-4">Saved Places</Text>
            <Text className="text-gray-500 text-center mt-2 px-8">
              Places and events you save will appear here
            </Text>
          </View>
        );
      case 'tagged':
        return (
          <View className="flex-1 items-center justify-center py-20 bg-white">
            <Icon name="user" size={48} color={iconColors.muted} />
            <Text className="text-lg font-semibold text-gray-900 mt-4">Tagged</Text>
            <Text className="text-gray-500 text-center mt-2 px-8">
              When people tag you, it will appear here
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-2 border-b border-gray-100">
        <View className="w-8" />
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-lg font-bold text-gray-900">{mockUser.username}</Text>
          <Icon name="chevron-down" size={18} color={iconColors.active} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="menu" size={24} color={iconColors.active} />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <ProfileHeader
          user={mockUser}
          isOwnProfile={true}
          onEditProfile={handleEditProfile}
          onSettings={handleSettings}
        />
        <ProfileHighlights
          highlights={mockHighlights}
          isOwnProfile={true}
          onAddHighlight={() => console.log('Add highlight')}
        />
        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {renderTabContent()}
      </ScrollView>
    </SafeAreaView>
  );
};
