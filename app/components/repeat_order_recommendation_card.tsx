import { Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const RepeatOrderRecommendationCard = () => {
  return (
    <View className="border border-slate-300 rounded-xl p-3 w-72 mr-6">
      <Text className="text-red-700 font-bold">gofood</Text>
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text className="font-semibold">Hisana Fried Chicken, Siteba</Text>
          <View className="flex flex-row gap-1">
            <View className="bg-red-700 flex items-center justify-center p-1 rounded-full">
              <FontAwesome5 name="percentage" size={8} color="white" />
            </View>
            <Text className="font-semibold text-sm">Diskon 70%, maks...</Text>
          </View>
        </View>
        <View className="w-12 h-12 bg-slate-500"></View>
      </View>
    </View>
  );
};

export default RepeatOrderRecommendationCard;
