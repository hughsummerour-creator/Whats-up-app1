import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { mockPlaces } from '@/utils/mockData';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const MapScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top']}>
      {/* Map Placeholder */}
      <View className="flex-1 bg-gray-200 items-center justify-center relative">
        {/* Fake map background */}
        <View className="absolute inset-0 bg-gray-100">
          {/* Grid lines to simulate map */}
          {[...Array(20)].map((_, i) => (
            <View
              key={`h-${i}`}
              className="absolute w-full h-px bg-gray-200"
              style={{ top: i * 40 }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <View
              key={`v-${i}`}
              className="absolute h-full w-px bg-gray-200"
              style={{ left: i * 40 }}
            />
          ))}
        </View>

        {/* Map pins */}
        <View className="absolute" style={{ top: 100, left: 80 }}>
          <View className="bg-primary-500 w-10 h-10 rounded-full items-center justify-center shadow-lg">
            <Text className="text-white text-lg">🍽️</Text>
          </View>
        </View>
        <View className="absolute" style={{ top: 200, left: 200 }}>
          <View className="bg-purple-500 w-10 h-10 rounded-full items-center justify-center shadow-lg">
            <Text className="text-white text-lg">🍸</Text>
          </View>
        </View>
        <View className="absolute" style={{ top: 150, left: 280 }}>
          <View className="bg-green-500 w-10 h-10 rounded-full items-center justify-center shadow-lg">
            <Text className="text-white text-lg">☕</Text>
          </View>
        </View>
        <View className="absolute" style={{ top: 280, left: 120 }}>
          <View className="bg-pink-500 w-10 h-10 rounded-full items-center justify-center shadow-lg">
            <Text className="text-white text-lg">🎉</Text>
          </View>
        </View>

        {/* Current location indicator */}
        <View className="absolute" style={{ top: 220, left: 180 }}>
          <View className="w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow-lg" />
        </View>

        {/* Search bar overlay */}
        <View className="absolute top-4 left-4 right-4">
          <TouchableOpacity className="bg-white rounded-full px-4 py-3 flex-row items-center shadow-md">
            <Text className="text-gray-400 mr-2">🔍</Text>
            <Text className="text-gray-400 flex-1">Search this area...</Text>
            <TouchableOpacity className="bg-gray-100 px-3 py-1 rounded-full">
              <Text className="text-sm font-medium text-gray-700">Filters</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        {/* Recenter button */}
        <TouchableOpacity className="absolute right-4 bottom-32 bg-white w-12 h-12 rounded-full items-center justify-center shadow-lg">
          <Text className="text-xl">📍</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Sheet - Places Preview */}
      <View className="bg-white rounded-t-3xl shadow-lg" style={{ height: 180 }}>
        <View className="items-center py-2">
          <View className="w-10 h-1 bg-gray-300 rounded-full" />
        </View>
        <Text className="px-4 font-bold text-gray-900 mb-2">Nearby Places</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          {mockPlaces.map((place) => (
            <TouchableOpacity
              key={place.id}
              className="mr-3 bg-gray-50 rounded-xl overflow-hidden"
              style={{ width: 160 }}
            >
              <Image
                source={{ uri: place.imageUrls[0] }}
                style={{ width: 160, height: 80 }}
                contentFit="cover"
              />
              <View className="p-2">
                <Text className="font-semibold text-gray-900" numberOfLines={1}>
                  {place.name}
                </Text>
                <Text className="text-xs text-gray-500">⭐ {place.rating} • {place.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

