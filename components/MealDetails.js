import { View, Text, StyleSheet} from "react-native";


export default function MealDetails({duration, complexity, affordability}) {
    return(
        <View style={styles.details }>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}> {complexity}</Text>
            <Text style={styles.detailItem}>{affordability}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 20,
        
    }
}); 