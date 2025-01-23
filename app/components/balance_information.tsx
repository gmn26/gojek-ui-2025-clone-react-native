import { Text, TouchableWithoutFeedback, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";

const BalanceInformation = () => {
  return (
    <View className="flex flex-row justify-between m-3 -mt-8 p-3 border border-slate-300 bg-white rounded-3xl">
      <View className="flex flex-row gap-2 items-center">
        <View className="bg-slate-200 rounded-full p-2">
          <FontAwesome6 name="wallet" size={16} color={"#1DAEDE"} />
        </View>
        <View>
          <Text className="font-bold">Rp0</Text>
          <Text>120 Coins</Text>
        </View>
      </View>
      <View className="flex flex-row gap-4 items-center">
        <View className="flex items-center">
          <View className="bg-[#1DAEDE] p-1 rounded">
            <FontAwesome name="arrow-up" size={12} color="white" />
          </View>
          <Text className="text-sm">Bayar</Text>
        </View>
        <View className="flex items-center">
          <View className="bg-[#1DAEDE] p-1 rounded">
            <FontAwesome5 name="plus" size={12} color="white" />
          </View>
          <Text className="text-sm">Top Up</Text>
        </View>
        <View className="flex items-center">
          <View className="bg-[#1DAEDE] p-1 rounded">
            <Entypo name="dots-three-horizontal" size={12} color="white" />
          </View>
          <Text className="text-sm">Lainnya</Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceInformation;
