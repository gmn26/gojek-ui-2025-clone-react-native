import { Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const SmallPromoCard = () => {
  return (
    <View className="mx-4 my-2 p-2 rounded-lg bg-green-800 flex flex-row justify-between items-center">
      <View className="flex flex-row items-center gap-2">
        <View className="bg-white rounded-full flex items-center justify-center p-1.5">
          <MaterialIcons name="discount" size={20} color="red" />
        </View>
        <Text className="text-white">Auto diskon sampai 10Rb di GoFood!</Text>
      </View>
      <View>
        <View className="bg-white rounded-full flex items-center justify-center p-1">
          <FontAwesome5 name="arrow-right" size={16} color="green" />
        </View>
      </View>
    </View>
  );
};

export default SmallPromoCard;
