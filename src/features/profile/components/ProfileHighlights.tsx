import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

interface Highlight {
  id: string;
  title: string;
  imageUrl: string;
}

interface ProfileHighlightsProps {
  highlights: Highlight[];
  onHighlightPress?: (highlight: Highlight) => void;
  onAddHighlight?: () => void;
  isOwnProfile?: boolean;
}

export const ProfileHighlights = ({
  highlights,
  onHighlightPress,
  onAddHighlight,
  isOwnProfile = true,
}: ProfileHighlightsProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="bg-white py-4 border-b border-gray-100"
      contentContainerStyle={{ paddingHorizontal: 16 }}
    >
      {/* Add New Highlight Button (only for own profile) */}
      {isOwnProfile && (
        <TouchableOpacity
          onPress={onAddHighlight}
          className="items-center mr-4"
        >
          <View className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 items-center justify-center bg-gray-50">
            <Text className="text-2xl text-gray-400">+</Text>
          </View>
          <Text className="text-xs text-gray-500 mt-1">New</Text>
        </TouchableOpacity>
      )}

      {/* Highlight Items */}
      {highlights.map((highlight) => (
        <TouchableOpacity
          key={highlight.id}
          onPress={() => onHighlightPress?.(highlight)}
          className="items-center mr-4"
        >
          <View className="w-16 h-16 rounded-full border-2 border-gray-200 p-0.5">
            <Image
              source={{ uri: highlight.imageUrl }}
              className="w-full h-full rounded-full bg-gray-200"
              contentFit="cover"
            />
          </View>
          <Text className="text-xs text-gray-700 mt-1" numberOfLines={1}>
            {highlight.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

