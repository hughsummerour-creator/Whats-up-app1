import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, iconColors } from '@/components/Icon';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { useProfileStore } from '@/stores';
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
  const { profileImageUri, setProfileImage } = useProfileStore();
  
  // Use uploaded image if available, otherwise use user's avatarUrl
  const displayImage = profileImageUri || user.avatarUrl;

  return (
    <View className="bg-white px-4 pt-2 pb-4">
      {/* Top Row: Avatar + Stats */}
      <View className="flex-row items-center mb-4">
        {/* Avatar - Clickable if own profile */}
        <View className="mr-6">
          <ProfileAvatar
            uri={displayImage}
            size={80}
            editable={isOwnProfile}
            onImageSelected={(uri) => setProfileImage(uri || null)}
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
              className="bg-gray-100 px-4 py-2 rounded-lg items-center justify-center"
            >
              <Icon name="settings" size={18} color={iconColors.active} />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={onFollow}
              className="flex-1 bg-gray-900 py-2 rounded-lg items-center"
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

const StatItem = ({ value, label }: { value: number; label: string }) => (
  <TouchableOpacity className="items-center">
    <Text className="text-lg font-bold text-gray-900">{formatNumber(value)}</Text>
    <Text className="text-sm text-gray-500">{label}</Text>
  </TouchableOpacity>
);

const mockPostCount = 47;
