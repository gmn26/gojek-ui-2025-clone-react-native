import { Text, View } from "react-native";

const FeaturesGridview = () => {
  return (
    <View className="p-4 flex gap-8">
      <View className="flex flex-row justify-between">
        <View className="flex items-center w-1/4">
          <View className="w-12 h-12 bg-slate-300 rounded-lg"></View>
          <Text>GoRide</Text>
        </View>
        <View className="flex items-center w-1/4">
          <View className="w-12 h-12 bg-slate-300 rounded-lg"></View>
          <Text>GoCar</Text>
        </View>
        <View className="flex items-center w-1/4">
          <View className="w-12 h-12 bg-slate-300 rounded-lg"></View>
          <Text>GoFood</Text>
        </View>
        <View className="flex items-center w-1/4">
          <View className="w-12 h-12 bg-slate-300 rounded-lg"></View>
          <Text>GoSend</Text>
        </View>
      </View>
      <View className="flex flex-row justify-between">
        <View className="flex items-center w-1/4">
          <View className="w-12 h-12 bg-slate-300 rounded-lg"></View>
          <Text>GoMart</Text>
        </View>
        <View className="flex items-center w-1/4">
          <View className="w-12 h-12 bg-slate-300 rounded-lg"></View>
          <Text>GoPay Pinjam</Text>
        </View>
        <View className="flex items-center w-1/4">
          <View className="w-12 h-12 bg-slate-300 rounded-lg "></View>
          <Text>GoFood HEMAT</Text>
        </View>
        <View className="flex items-center w-1/4">
          <View className="w-12 h-12 bg-slate-300 rounded-lg"></View>
          <Text>Lainnya</Text>
        </View>
      </View>
    </View>
  );
};

export default FeaturesGridview;
