import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, iconColors } from '@/components/Icon';
import { ProfileHeader } from '../components/ProfileHeader';
import { mockUser, mockPlaces, formatNumber } from '@/utils/mockData';
import { Image } from 'expo-image';

type Review = {
  id: string;
  placeName: string;
  rating: number;
  date: string;
  category?: string;
  text: string;
  photos?: string[];
};

const mockReviews: Review[] = [
  {
    id: '1',
    placeName: mockPlaces[0].name,
    rating: mockPlaces[0].rating,
    date: '2 days ago',
    category: 'Restaurant',
    text: 'Cozy spot with handmade pasta and an easy, unhurried vibe. Perfect for a slow dinner.',
    photos: mockPlaces[0].imageUrls,
  },
  {
    id: '2',
    placeName: mockPlaces[1].name,
    rating: mockPlaces[1].rating,
    date: 'Last weekend',
    category: 'Nightlife',
    text: 'Rooftop views, good music, and not too crowded early in the night.',
    photos: mockPlaces[1].imageUrls,
  },
  {
    id: '3',
    placeName: mockPlaces[2].name,
    rating: mockPlaces[2].rating,
    date: 'This month',
    category: 'Cafe',
    text: 'Calm coffee spot with plenty of light and just enough noise to feel alive.',
    photos: mockPlaces[2].imageUrls,
  },
];

export const ProfileScreen = () => {
  const isOwnProfile = true; // Placeholder until auth/user context is wired

  const plansSaved = mockUser.savedCount ?? 0;
  const eventsJoined = 3;
  const spotsReviewed = mockReviews.length;

  const handleEditProfile = () => {
    console.log('Edit profile');
  };

  const handleSettings = () => {
    console.log('Settings');
  };

  const renderReviewCard = (review: Review) => {
    return (
      // Touchable wrapper gives soft press feedback without changing behavior
      <TouchableOpacity
        key={review.id}
        activeOpacity={0.96}
        className="mx-4 mb-4"
      >
        <View className="rounded-2xl bg-white border border-gray-100 px-4 py-4">
          <Text className="text-sm font-semibold text-gray-900 mb-1">
            {review.placeName}
          </Text>

          {/* Compact, calm metadata row for rating, date, and category */}
          <View className="flex-row items-center mt-1 mb-3">
            <View className="flex-row items-center">
              <Icon name="star" size={12} color={iconColors.active} />
              <Text className="ml-1 text-xs text-gray-700">
                {review.rating.toFixed(1)}
              </Text>
            </View>
            <View className="mx-2 w-1 h-1 rounded-full bg-gray-300" />
            <Text className="text-xs text-gray-500">{review.date}</Text>
            {review.category ? (
              <>
                <View className="mx-2 w-1 h-1 rounded-full bg-gray-300" />
                <Text className="text-xs text-gray-500">{review.category}</Text>
              </>
            ) : null}
          </View>

          <Text
            className="text-sm text-gray-700 mb-3"
            numberOfLines={3}
          >
            {review.text}
          </Text>

          {review.photos && review.photos.length > 0 && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 2 }}
            >
              {review.photos.map((uri) => (
                <View key={uri} className="mr-2">
                  <Image
                    source={{ uri }}
                    className="w-16 h-16 rounded-lg bg-gray-200"
                    contentFit="cover"
                  />
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      {/* App Header */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
        <View className="w-6" />
        <Text className="text-base font-semibold text-gray-900">
          {isOwnProfile ? 'You' : 'Profile'}
        </Text>
        <TouchableOpacity onPress={handleSettings}>
          <Icon name="settings" size={20} color={iconColors.active} />
        </TouchableOpacity>
      </View>

      {/* Top identity section (card + stats + actions) */}
      <View className="pt-4 pb-2">
        <ProfileHeader
          user={mockUser}
          isOwnProfile={isOwnProfile}
          interests={['Food lover', 'Live music', 'Hidden gems']}
        />

        {/* Stats row */}
        <View className="mt-4 px-4">
          <View className="flex-row justify-around">
            <View className="items-center">
              <Text className="text-lg font-semibold text-gray-900">
                {plansSaved}
              </Text>
              <Text
                className="text-xs text-gray-500 mt-0.5"
                numberOfLines={1}
              >
                Plans Saved
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-lg font-semibold text-gray-900">
                {eventsJoined}
              </Text>
              <Text
                className="text-xs text-gray-500 mt-0.5"
                numberOfLines={1}
              >
                Events Joined
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-lg font-semibold text-gray-900">
                {spotsReviewed}
              </Text>
              <Text
                className="text-xs text-gray-500 mt-0.5"
                numberOfLines={1}
              >
                Spots Reviewed
              </Text>
            </View>
          </View>

          {/* Social context (subtle) */}
          <Text className="mt-2.5 text-xs text-gray-400 text-center">
            {formatNumber(mockUser.followersCount)} friends
          </Text>
        </View>

        {/* Actions */}
        <View className="mt-4 px-4 mb-2">
          {isOwnProfile ? (
            <TouchableOpacity
              onPress={handleEditProfile}
              className="w-full py-2.5 rounded-full bg-gray-900 items-center"
              activeOpacity={0.9}
            >
              <Text className="text-sm font-semibold text-white">
                Edit profile
              </Text>
            </TouchableOpacity>
          ) : (
            <View className="flex-row gap-2">
              <TouchableOpacity
                className="flex-1 py-2.5 rounded-full bg-gray-900 items-center"
                activeOpacity={0.9}
              >
                <Text className="text-sm font-semibold text-white">
                  Follow
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 py-2.5 rounded-full bg-gray-100 items-center"
                activeOpacity={0.9}
              >
                <Text className="text-sm font-semibold text-gray-900">
                  Message
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Divider */}
        <View className="px-4 mt-2 mb-4">
          <View className="h-px bg-gray-200" />
        </View>
      </View>

      {/* Public activity / reviews */}
      <View className="flex-1 bg-gray-50">
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 8, paddingBottom: 24 }}
        >
          <View className="px-4 mb-3">
            <Text className="text-sm font-semibold text-gray-900">
              Reviews
            </Text>
            <Text className="mt-1 text-xs text-gray-500">
              Your recent spots and how they felt.
            </Text>
          </View>

          {mockReviews.length === 0 ? (
            <View className="flex-1 items-center justify-center mt-16 px-8">
              <Text className="text-sm text-gray-500 text-center mb-2">
                You haven’t reviewed any spots yet.
              </Text>
              <TouchableOpacity
                className="mt-2 px-4 py-2 rounded-full bg-gray-900"
                activeOpacity={0.9}
              >
                <Text className="text-xs font-semibold text-white">
                  Explore places nearby
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            mockReviews.map(renderReviewCard)
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
