import { StyleSheet, View } from 'react-native';
import MacroCard from '../macroCards/MacroCard';

export default function MacroGrid({ meals }: any) {
    const totalCalories = meals.reduce((acc: number, meal: any) => acc + meal.calories, 0);
    const totalProtein = meals.reduce((acc: number, meal: any) => acc + meal.protein, 0);
    const totalCarbs = meals.reduce((acc: number, meal: any) => acc + meal.carbs, 0);
    const totalFat = meals.reduce((acc: number, meal: any) => acc + meal.fat, 0);
    return (
        <View style={styles.grid}>
            <MacroCard label='Calories' value={`${totalCalories}`} goal='2,000' color='#ff6b6b' />
            <MacroCard label='Protein' value={`${totalProtein}g`} goal='150g' color='#4ecdc4' />
            <MacroCard label='Carbs' value={`${totalCarbs}g`} goal='250g' color='#ffd93d' />
            <MacroCard label='Fat' value={`${totalFat}g`} goal='65g' color='#6bcb77' />
        </View>
    );
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
});