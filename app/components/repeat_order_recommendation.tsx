import { ScrollView, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import RepeatOrderRecommendationCard from "./repeat_order_recommendation_card";

const RepeatOrderRecommendation = () => {
  return (
    <View className="mx-4 my-2">
      <Text className="font-bold text-xl mb-4">Lebih cepat buat book lagi</Text>
      <ScrollView horizontal={true}>
        <RepeatOrderRecommendationCard />
        <RepeatOrderRecommendationCard />
        <RepeatOrderRecommendationCard />
        <RepeatOrderRecommendationCard />
        <RepeatOrderRecommendationCard />
      </ScrollView>
    </View>
  );
};

export default RepeatOrderRecommendation;
