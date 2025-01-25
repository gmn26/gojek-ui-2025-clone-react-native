import { Image, ImageBackground, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

interface BestRateRestoAdCardProps {
  data: {
    id: number;
    restaurant_distance: string;
    restaurant_name: string;
    restaurant_rate: number;
    restaurant_image: string;
  };
}

const BestRateRestoAdCard: React.FC<BestRateRestoAdCardProps> = (props) => {
  return (
    <View className="w-52 border border-slate-500 rounded-2xl mr-4">
      <Image
        source={{ uri: props.data.restaurant_image }}
        className="w-[105%] translate-x-[-2.5r%] -translate-y-2 h-48 bg-slate-400 rounded-2xl"
      />
      {/* <View className="w-[105%] h-48 bg-slate-400 rounded-2xl"></View> */}
      <View className="ml-4 my-3 flex gap-2">
        <Text className="text-sm">{props.data.restaurant_distance}</Text>
        <Text className="font-semibold text-xl">
          {props.data.restaurant_name}
        </Text>
        <View className="flex flex-row gap-1">
          <Entypo name="star" size={18} color="orange" />
          <Text>{props.data.restaurant_rate}</Text>
        </View>
      </View>
    </View>
  );
};

export default BestRateRestoAdCard;
