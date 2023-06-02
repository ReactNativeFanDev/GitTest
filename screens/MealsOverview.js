import { FlatList , View, StyleSheet, Text } from "react-native";
import { MEALS } from "../data/dummy-data";


import MealItem from "../components/MealItem";
 
 export default function MealsOverview ({navigation, route})  {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });



    function renderMealItem(itemData) {
        
        const item = itemData.item;

        function pressHandler() {
            navigation.navigate("DetailScreen", {
                steps: item.steps,
                id: item.id,
            });
        }


        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }

        return(
            <MealItem {...mealItemProps} onPress={pressHandler}/>
        )
    }
    return(
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
        </View>
    )
}

const  styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 16,
    },
})