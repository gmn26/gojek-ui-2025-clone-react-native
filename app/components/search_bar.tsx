import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

const SearchBar = () => {
  return (
    <View className="flex flex-row gap-2">
      <View className="flex flex-row items-center flex-grow border bg-white rounded-full px-3">
        <AntDesign name="search1" size={20} color="black" />
        <TextInput placeholder="Cari apa yang kamu mau disini..." />
      </View>
      <TouchableOpacity className="flex justify-center items-center rounded-full w-11 h-11 bg-white">
        <Ionicons name="person" size={20} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
