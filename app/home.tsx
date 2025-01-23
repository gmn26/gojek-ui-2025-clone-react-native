import SearchBar from "@/app/components/search_bar";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <SearchBar />
      <Text className="bg-slate-600 text-3xl">Home Page.</Text>
    </View>
  );
}
