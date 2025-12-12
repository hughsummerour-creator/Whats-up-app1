import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import type { User } from '@/types';
import { formatNumber } from '@/utils/mockData';

interface ProfileHeaderProps {
  user: User;
  isOwnProfile?: boolean;
  onEditProfile?: () => void;
  onFollow?: () => void;
  onMessage?: () => void;
  onSettings?: () => void;
}

export const ProfileHeader = ({
  user,
  isOwnProfile = true,
  onEditProfile,
  onFollow,
  onMessage,
  onSettings,
}: ProfileHeaderProps) => {
  return (
    <View className="bg-white px-4 pt-2 pb-4">
      {/* Top Row: Avatar + Stats */}
      <View className="flex-row items-center mb-4">
        {/* Avatar */}
        <View className="mr-6">
          <Image
            source={{ uri: user.avatarUrl }}
            className="w-20 h-20 rounded-full bg-gray-200"
            contentFit="cover"
          />
        </View>

        {/* Stats */}
        <View className="flex-1 flex-row justify-around">
          <StatItem value={mockPostCount} label="Posts" />
          <StatItem value={user.followersCount} label="Followers" />
          <StatItem value={user.followingCount} label="Following" />
        </View>
      </View>

      {/* Name & Bio */}
      <View className="mb-4">
        <Text className="text-base font-bold text-gray-900">{user.displayName}</Text>
        {user.bio && (
          <Text className="text-sm text-gray-700 mt-1">{user.bio}</Text>
        )}
      </View>

      {/* Action Buttons */}
      <View className="flex-row gap-2">
        {isOwnProfile ? (
          <>
            <TouchableOpacity
              onPress={onEditProfile}
              className="flex-1 bg-gray-100 py-2 rounded-lg items-center"
            >
              <Text className="font-semibold text-gray-900">Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onSettings}
              className="bg-gray-100 px-4 py-2 rounded-lg items-center"
            >
              <Text className="text-lg">⚙️</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={onFollow}
              className="flex-1 bg-primary-500 py-2 rounded-lg items-center"
            >
              <Text className="font-semibold text-white">Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onMessage}
              className="flex-1 bg-gray-100 py-2 rounded-lg items-center"
            >
              <Text className="font-semibold text-gray-900">Message</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

// Stat Item Component
const StatItem = ({ value, label }: { value: number; label: string }) => (
  <TouchableOpacity className="items-center">
    <Text className="text-lg font-bold text-gray-900">{formatNumber(value)}</Text>
    <Text className="text-sm text-gray-500">{label}</Text>
  </TouchableOpacity>
);

// Placeholder post count
const mockPostCount = 47;

