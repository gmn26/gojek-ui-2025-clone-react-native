import { Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const LastOrdereddCard = () => {
  return (
    <View className="w-52 border border-slate-500 rounded-2xl mr-4 overflow-hidden">
      <View className="w-full h-48 bg-slate-400"></View>
      <View className="ml-4 my-3 flex gap-2">
        <Text className="text-sm">1.82 km</Text>
        <Text className="font-semibold text-xl">Sarapan Pagi & Gorengan</Text>
        <View className="flex flex-row gap-1">
          <Entypo name="star" size={18} color="orange" />
          <Text>4.5</Text>
        </View>
      </View>
    </View>
  );
};

export default LastOrdereddCard;
