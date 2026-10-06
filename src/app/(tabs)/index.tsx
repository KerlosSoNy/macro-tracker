import CopyButton from '@/components/CopyButton';
import HomeHeader from '@/components/header/HomeHeader';
import MacroGrid from '@/components/macroGrid/MacroGrid';
import RecentMeals from '@/components/recentMeals/recentMeals';
import ReminderToggle from '@/components/ReminderToggle';
import ShareButton from '@/components/ShareButton';
import { getMeals } from '@/storage/meals';
import { globalStyles } from '@/styles/global';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  const [meals, setMeals] = useState<any>([]);

  useFocusEffect(
    useCallback(() => {
      getMeals().then((meals) => {
        setMeals(meals);
      });
    }, []),
  );
  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>MacroZone</Text>
        <ShareButton meals={meals} />
      </View>

      <HomeHeader />
      <MacroGrid meals={meals} />
      <RecentMeals meals={meals} />
      <CopyButton meals={meals} />
      <ReminderToggle />
    </ScrollView>
  );
}

