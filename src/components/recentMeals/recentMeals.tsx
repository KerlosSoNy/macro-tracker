import { deleteMeal, getMeals } from '@/storage/meals';
import { globalStyles } from '@/styles/global';
import { FlatList, Text, View } from 'react-native';
import MealItem from '../MealItem/mealItem';

export default function RecentMeals({ meals }: any) {

    return (
        <View style={{ marginTop: 10 }} >
            <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
            <FlatList
                data={meals}
                keyExtractor={(meal) => meal.id.toString()}
                renderItem={({ item }) => (
                    <MealItem
                        id={item.id}
                        onDelete={async () => {
                            await deleteMeal(item.id);
                            await getMeals();
                        }}
                        name={item.name}
                        calories={item.calories}
                        protein={item.protein}
                        carbs={item.carbs}
                        fat={item.fat}
                    />
                )}
                ListEmptyComponent={
                    <Text style={{ color: 'gray', marginTop: 10 }}>
                        No recent meals found.
                    </Text>
                }
                style={{ maxHeight: 250 }}
            />
        </View>
    );
}