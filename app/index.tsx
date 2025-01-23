import SearchBar from "@/app/components/search_bar";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import BalanceInformation from "./components/balance_information";
import FeaturesGridview from "./components/features_gridview";
import SmallPromoCard from "./components/small_promo_card";

export default function Index() {
  return (
    <ScrollView>
      <View className="bg-black p-2 h-72">
        <SearchBar />
      </View>
      <BalanceInformation />
      <FeaturesGridview />
      <SmallPromoCard />
      <View className="w-full my-2 px-4">
        <TouchableOpacity className="h-40 bg-slate-300 rounded-2xl" />
      </View>
    </ScrollView>
  );
}
