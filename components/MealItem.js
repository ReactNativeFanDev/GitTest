import { Text, View, Pressable, StyleSheet, Image, Platform } from "react-native";
import MealDetails from "./MealDetails";

export default function MealItem({title, imageUrl, duration, complexity, affordability, onPress}){
    return(
        <View style={styles.MealItem }>
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => (pressed ? styles.buttonPresed : null)}
                onPress={onPress}
            >
                <View>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    MealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: {width: 0.2 , height: 0.2},
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    innerContainer: {
        borderRadius: 8, 
        overflow: "hidden",
    },
    buttonPresed: {
        opacity: 0.5 
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
  }); 
  