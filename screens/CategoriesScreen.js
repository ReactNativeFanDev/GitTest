import CategoryGridFTile from "../components/CategoryGridTile";
import { CATEGORIES  } from "../data/dummy-data"
import { FlatList, View } from "react-native"




export default function CategoriesScreen({navigation}) {


    function RenderItem(itemData) {
        function pressHandler () {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
            });
        }
        return <CategoryGridFTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    }


    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={RenderItem}
            numColumns={2}
        />
    )
}