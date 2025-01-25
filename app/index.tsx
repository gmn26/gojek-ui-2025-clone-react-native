import SearchBar from "@/app/components/search_bar";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import BalanceInformation from "./components/balance_information";
import FeaturesGridview from "./components/features_gridview";
import SmallPromoCard from "./components/small_promo_card";
import RepeatOrderRecommendation from "./components/repeat_order_recommendation";
import PromoPictureContainer from "./components/promo_picture_container";
import BestRateRestoAd from "./components/best_rate_resto_ad";
import LastOrdered from "./components/last_oredered";

export default function Index() {
  return (
    <ScrollView>
      <View className="bg-black p-2 h-72">
        <SearchBar />
      </View>
      <BalanceInformation />
      <FeaturesGridview />
      <SmallPromoCard />
      <RepeatOrderRecommendation />
      <PromoPictureContainer />
      <BestRateRestoAd />
      <LastOrdered />
    </ScrollView>
  );
}
