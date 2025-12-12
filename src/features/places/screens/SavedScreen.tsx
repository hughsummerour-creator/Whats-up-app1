import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { mockPlaces } from '@/utils/mockData';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = (SCREEN_WIDTH - 48) / 2;

type SavedTab = 'all' | 'places' | 'events';

export const SavedScreen = () => {
  const [activeTab, setActiveTab] = useState<SavedTab>('all');

  const tabs: { key: SavedTab; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'places', label: 'Places' },
    { key: 'events', label: 'Events' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-4 py-3 border-b border-gray-100">
        <Text className="text-2xl font-bold text-gray-900">Saved</Text>
      </View>

      {/* Tabs */}
      <View className="flex-row px-4 py-3 gap-2">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            onPress={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab.key ? 'bg-gray-900' : 'bg-gray-100'
            }`}
          >
            <Text
              className={`font-medium ${
                activeTab === tab.key ? 'text-white' : 'text-gray-700'
              }`}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Saved Items Grid */}
      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="flex-row flex-wrap justify-between">
          {mockPlaces.map((place) => (
            <TouchableOpacity
              key={place.id}
              className="mb-4"
              style={{ width: CARD_WIDTH }}
            >
              <Image
                source={{ uri: place.imageUrls[0] }}
                style={{ width: CARD_WIDTH, height: CARD_WIDTH, borderRadius: 12 }}
                contentFit="cover"
              />
              <View className="mt-2">
                <Text className="font-semibold text-gray-900" numberOfLines={1}>
                  {place.name}
                </Text>
                <View className="flex-row items-center mt-1">
                  <Text className="text-sm text-gray-500">{place.location.city}</Text>
                  <Text className="mx-1 text-gray-300">•</Text>
                  <Text className="text-sm text-gray-500">⭐ {place.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}

          {/* Duplicate for more content */}
          {mockPlaces.map((place) => (
            <TouchableOpacity
              key={`${place.id}-2`}
              className="mb-4"
              style={{ width: CARD_WIDTH }}
            >
              <Image
                source={{ uri: place.imageUrls[0] }}
                style={{ width: CARD_WIDTH, height: CARD_WIDTH, borderRadius: 12 }}
                contentFit="cover"
              />
              <View className="mt-2">
                <Text className="font-semibold text-gray-900" numberOfLines={1}>
                  {place.name}
                </Text>
                <View className="flex-row items-center mt-1">
                  <Text className="text-sm text-gray-500">{place.location.city}</Text>
                  <Text className="mx-1 text-gray-300">•</Text>
                  <Text className="text-sm text-gray-500">⭐ {place.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

