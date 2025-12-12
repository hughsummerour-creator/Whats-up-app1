import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import type { Place } from '@/types';
import { formatNumber } from '@/utils/mockData';

interface FeedCardProps {
  place: Place;
  onPress?: () => void;
  onLike?: () => void;
  onSave?: () => void;
  onShare?: () => void;
  onComment?: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const FeedCard = ({
  place,
  onPress,
  onLike,
  onSave,
  onShare,
  onComment,
}: FeedCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(place.isSaved ?? false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.();
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave?.();
  };

  return (
    <View className="bg-white mb-2">
      {/* Header */}
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center px-3 py-2"
      >
        <Image
          source={{ uri: place.imageUrls[0] }}
          className="w-8 h-8 rounded-full bg-gray-200"
          contentFit="cover"
        />
        <View className="ml-3 flex-1">
          <Text className="font-semibold text-gray-900">{place.name}</Text>
          <Text className="text-xs text-gray-500">{place.location.city}</Text>
        </View>
        <TouchableOpacity className="p-2">
          <Text>•••</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Image */}
      <TouchableOpacity onPress={onPress} activeOpacity={0.95}>
        <Image
          source={{ uri: place.imageUrls[0] }}
          style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }}
          contentFit="cover"
          transition={200}
        />
      </TouchableOpacity>

      {/* Action Buttons */}
      <View className="flex-row items-center justify-between px-3 py-2">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={handleLike}>
            <Text className="text-2xl">{isLiked ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onComment}>
            <Text className="text-2xl">💬</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <Text className="text-2xl">📤</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSave}>
          <Text className="text-2xl">{isSaved ? '🔖' : '📑'}</Text>
        </TouchableOpacity>
      </View>

      {/* Likes & Rating */}
      <View className="px-3 pb-1">
        <View className="flex-row items-center">
          <Text className="font-semibold text-gray-900">
            {formatNumber(place.reviewCount)} reviews
          </Text>
          <Text className="mx-2 text-gray-400">•</Text>
          <Text className="text-gray-900">⭐ {place.rating.toFixed(1)}</Text>
          {place.aiScore && (
            <>
              <Text className="mx-2 text-gray-400">•</Text>
              <Text className="text-primary-500 font-medium">
                🤖 {place.aiScore}% match
              </Text>
            </>
          )}
        </View>
      </View>

      {/* Description */}
      <View className="px-3 pb-3">
        <Text className="text-gray-900" numberOfLines={2}>
          <Text className="font-semibold">{place.name}</Text>
          {' '}{place.description}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text className="text-gray-400 mt-1">View all {place.reviewCount} reviews</Text>
        </TouchableOpacity>
      </View>

      {/* Tags */}
      <View className="flex-row flex-wrap px-3 pb-3 gap-1">
        {place.tags.slice(0, 3).map((tag) => (
          <View key={tag} className="bg-gray-100 px-2 py-1 rounded-full">
            <Text className="text-xs text-gray-600">{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

