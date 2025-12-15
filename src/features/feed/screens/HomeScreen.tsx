import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, iconColors } from '@/components/Icon';
import { FeedCard } from '../components/FeedCard';
import { mockPlaces } from '@/utils/mockData';

export const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  }, []);

  const handlePlacePress = (placeId: string) => {
    console.log('Place pressed:', placeId);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100">
        <Text className="text-2xl font-bold text-gray-900">What's Up</Text>
        <View className="flex-row items-center gap-5">
          <TouchableOpacity>
            <Icon name="bell" size={24} color={iconColors.active} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="send" size={24} color={iconColors.active} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="py-3 border-b border-gray-100"
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {['For You', 'Nearby', 'Trending', 'Food', 'Events', 'Nightlife'].map((category) => (
          <TouchableOpacity
            key={category}
            className={`px-4 py-2 rounded-full mr-2 ${
              category === 'For You' ? 'bg-gray-900' : 'bg-gray-100'
            }`}
          >
            <Text
              className={`font-medium ${
                category === 'For You' ? 'text-white' : 'text-gray-700'
              }`}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Feed */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* AI Recommendation Banner */}
        <View className="mx-4 my-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <View className="flex-row items-center mb-2">
            <Icon name="zap" size={18} color={iconColors.active} />
            <Text className="font-bold text-gray-900 ml-2">AI Picks for You</Text>
          </View>
          <Text className="text-sm text-gray-600">
            Based on your preferences, we found 5 new places you might love!
          </Text>
        </View>

        {/* Feed Cards */}
        {mockPlaces.map((place) => (
          <FeedCard
            key={place.id}
            place={place}
            onPress={() => handlePlacePress(place.id)}
          />
        ))}

        {mockPlaces.map((place) => (
          <FeedCard
            key={`${place.id}-2`}
            place={{ ...place, id: `${place.id}-2` }}
            onPress={() => handlePlacePress(place.id)}
          />
        ))}

        <View className="py-10 items-center">
          <Text className="text-gray-400">You're all caught up!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
