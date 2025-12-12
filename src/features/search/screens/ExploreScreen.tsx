import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const GRID_GAP = 2;
const SMALL_SIZE = (SCREEN_WIDTH - GRID_GAP * 2) / 3;
const LARGE_SIZE = SMALL_SIZE * 2 + GRID_GAP;

const exploreCategories = [
  { id: '1', name: 'Restaurants', emoji: '🍽️', color: 'bg-orange-100' },
  { id: '2', name: 'Bars & Clubs', emoji: '🍸', color: 'bg-purple-100' },
  { id: '3', name: 'Events', emoji: '🎉', color: 'bg-pink-100' },
  { id: '4', name: 'Cafés', emoji: '☕', color: 'bg-amber-100' },
  { id: '5', name: 'Outdoors', emoji: '🌳', color: 'bg-green-100' },
  { id: '6', name: 'Art & Culture', emoji: '🎨', color: 'bg-blue-100' },
];

const exploreImages = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=800&fit=crop',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=800&fit=crop',
  'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop',
];

export const ExploreScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Search Bar */}
      <View className="px-4 py-2">
        <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3">
          <Text className="text-gray-400 mr-2">🔍</Text>
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search places, events, or ask AI..."
            placeholderTextColor="#9ca3af"
            className="flex-1 text-base text-gray-900"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text className="text-gray-400">✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="py-3"
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          {exploreCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              className={`items-center justify-center px-4 py-3 rounded-2xl mr-3 ${category.color}`}
            >
              <Text className="text-2xl mb-1">{category.emoji}</Text>
              <Text className="text-xs font-medium text-gray-700">{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Instagram-style Explore Grid */}
        <View className="flex-row flex-wrap">
          {/* Row 1: 3 small */}
          <View className="flex-row">
            {exploreImages.slice(0, 3).map((img, i) => (
              <TouchableOpacity
                key={i}
                style={{
                  width: SMALL_SIZE,
                  height: SMALL_SIZE,
                  marginRight: i < 2 ? GRID_GAP : 0,
                  marginBottom: GRID_GAP,
                }}
              >
                <Image source={{ uri: img }} style={{ flex: 1 }} contentFit="cover" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 2: 1 large + 2 small stacked */}
          <View className="flex-row">
            <TouchableOpacity
              style={{
                width: LARGE_SIZE,
                height: LARGE_SIZE,
                marginRight: GRID_GAP,
                marginBottom: GRID_GAP,
              }}
            >
              <Image
                source={{ uri: exploreImages[3] }}
                style={{ flex: 1 }}
                contentFit="cover"
              />
            </TouchableOpacity>
            <View>
              {exploreImages.slice(4, 6).map((img, i) => (
                <TouchableOpacity
                  key={i}
                  style={{
                    width: SMALL_SIZE,
                    height: SMALL_SIZE,
                    marginBottom: GRID_GAP,
                  }}
                >
                  <Image source={{ uri: img }} style={{ flex: 1 }} contentFit="cover" />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Row 3: 2 small stacked + 1 large */}
          <View className="flex-row">
            <View>
              {exploreImages.slice(6, 8).map((img, i) => (
                <TouchableOpacity
                  key={i}
                  style={{
                    width: SMALL_SIZE,
                    height: SMALL_SIZE,
                    marginRight: GRID_GAP,
                    marginBottom: GRID_GAP,
                  }}
                >
                  <Image source={{ uri: img }} style={{ flex: 1 }} contentFit="cover" />
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={{
                width: LARGE_SIZE,
                height: LARGE_SIZE,
                marginBottom: GRID_GAP,
              }}
            >
              <Image
                source={{ uri: exploreImages[8] }}
                style={{ flex: 1 }}
                contentFit="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

