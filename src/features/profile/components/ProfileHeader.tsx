import React from 'react';
import { View, Text } from 'react-native';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { useProfileStore } from '@/stores';
import type { User } from '@/types';

interface ProfileHeaderProps {
  user: User;
  isOwnProfile?: boolean;
  interests?: string[];
}

export const ProfileHeader = ({
  user,
  isOwnProfile = true,
  interests,
}: ProfileHeaderProps) => {
  const { profileImageUri, setProfileImage } = useProfileStore();
  
  // Use uploaded image if available, otherwise use user's avatarUrl
  const displayImage = profileImageUri || user.avatarUrl;

  return (
    <View className="px-4">
      {/* Calm identity card with generous vertical spacing and centered content */}
      <View className="rounded-2xl bg-white px-5 py-7 border border-gray-100 items-center">
        <ProfileAvatar
          uri={displayImage}
          size={88}
          editable={isOwnProfile}
          onImageSelected={(uri) => setProfileImage(uri || null)}
        />

        {/* Name sits slightly further from avatar to breathe */}
        <Text className="mt-5 text-lg font-semibold text-gray-900" numberOfLines={1}>
          {user.displayName}
        </Text>

        {/* Username truncates gracefully to avoid wrapping chaos */}
        <Text
          className="mt-1 text-sm text-gray-500"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          @{user.username}
        </Text>

        {user.bio ? (
          <Text
            className="mt-3 text-sm text-gray-700 text-center"
            // Limit to 3 lines with comfortable reading line-height
            numberOfLines={3}
            style={{ lineHeight: 20 }}
          >
            {user.bio}
          </Text>
        ) : null}

        {interests && interests.length > 0 && (
          <View className="mt-2 flex-row flex-wrap justify-center">
            {interests.map((interest) => (
              <View
                key={interest}
                className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 mr-2 mb-2"
              >
                <Text className="text-xs text-gray-600">{interest}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};
