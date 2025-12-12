import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileHeader } from '../components/ProfileHeader';
import { ProfileHighlights } from '../components/ProfileHighlights';
import { ProfileTabs, type ProfileTabType } from '../components/ProfileTabs';
import { PhotoGrid } from '../components/PhotoGrid';
import { mockUser, mockPosts, mockHighlights } from '@/utils/mockData';

export const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState<ProfileTabType>('grid');

  const handleEditProfile = () => {
    console.log('Edit profile');
    // TODO: Navigate to edit profile screen
  };

  const handleSettings = () => {
    console.log('Settings');
    // TODO: Navigate to settings screen
  };

  const handlePostPress = (post: { id: string }) => {
    console.log('Post pressed:', post.id);
    // TODO: Navigate to post detail
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'grid':
        return <PhotoGrid posts={mockPosts} onPostPress={handlePostPress} />;
      case 'saved':
        return (
          <View className="flex-1 items-center justify-center py-20 bg-white">
            <Text className="text-4xl mb-4">🔖</Text>
            <Text className="text-lg font-semibold text-gray-900">Saved Places</Text>
            <Text className="text-gray-500 text-center mt-2 px-8">
              Places and events you save will appear here
            </Text>
          </View>
        );
      case 'tagged':
        return (
          <View className="flex-1 items-center justify-center py-20 bg-white">
            <Text className="text-4xl mb-4">👤</Text>
            <Text className="text-lg font-semibold text-gray-900">Tagged</Text>
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
        <View className="flex-row items-center">
          <Text className="text-lg font-bold text-gray-900">{mockUser.username}</Text>
          <Text className="ml-1">▼</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-2xl">☰</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Header with Avatar & Stats */}
        <ProfileHeader
          user={mockUser}
          isOwnProfile={true}
          onEditProfile={handleEditProfile}
          onSettings={handleSettings}
        />

        {/* Highlights */}
        <ProfileHighlights
          highlights={mockHighlights}
          isOwnProfile={true}
          onAddHighlight={() => console.log('Add highlight')}
        />

        {/* Tabs */}
        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Tab Content */}
        {renderTabContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

