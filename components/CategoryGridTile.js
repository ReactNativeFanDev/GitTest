import { Pressable, Text, View, StyleSheet, Platform  } from "react-native";

export default function CategoryGridFTile({title, color, onPress}) {
     return(
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{color: '#CCCC'}} 
                style={({pressed}) => [styles.button, pressed ? styles.buttonPresed : null]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: {width: 0.2 , height: 0.2},
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: {
        flex: 1,
    },
    buttonPresed: {
        opacity: 0.5 
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
    }
  }); 