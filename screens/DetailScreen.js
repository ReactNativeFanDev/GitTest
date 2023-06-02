import { FlatList, Text, View, StyleSheet, Image } from "react-native"
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

export default function DetailScreen({navigation, route}) {

    
    const mealId = route.params.id;
    const steps = route.params.steps;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image source={{uri: selectedMeal.imageUrl}}/>
            <Text>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}
            />
            <Text style={styles.steps}>Ingridient</Text>
            {selectedMeal.ingredients.map((ingredients) => (
                <Text key={ingredients}>{ingredients}</Text>
            ))}
            <Text style={styles.steps}>Steps</Text>
            {selectedMeal.steps.map((steps) => (
                <Text key={steps}>{steps}</Text>
            ))}
        </View>
    )
}

const  styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    steps: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
})