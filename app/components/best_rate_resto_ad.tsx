import { FlatList, ScrollView, Text, View } from "react-native";
import BestRateRestoAdCard from "./best_rate_resto_ad_card";
import data from "../data/best_rate_resto_ad_dummy.json";

const BestRateRestoAd = () => {
  return (
    <View className="mx-4 my-2">
      <Text className="text-xl font-semibold">
        Resto dengan rating jempolan
      </Text>
      <Text>Ad</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <BestRateRestoAdCard key={item.id} data={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default BestRateRestoAd;
