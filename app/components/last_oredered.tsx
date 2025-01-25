import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import LastOrdereddCard from "./last_oredered_card";

const LastOrdered = () => {
  return (
    <View className="mx-4 my-2">
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text className="font-semibold text-xl">Pesen lagi, yuk!</Text>
          <Text>Beli yang kemarin kamu suka.</Text>
        </View>
        <TouchableWithoutFeedback>
          <Text className="bg-green-300 text-green-950 px-3 py-1.5 rounded-2xl font-semibold">
            Lihat Semua
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <LastOrdereddCard />
        <LastOrdereddCard />
        <LastOrdereddCard />
        <LastOrdereddCard />
        <LastOrdereddCard />
        <LastOrdereddCard />
        <LastOrdereddCard />
        <LastOrdereddCard />
      </ScrollView>
    </View>
  );
};

export default LastOrdered;
