import { ActivityIndicator, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { RootStackParamList } from "../navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Input } from "@rneui/themed";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView style={{ backgroundColor: "#59C1CC" }}>
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        containerStyle={tw("w-full h-64 ")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input
        placeholder="Search by Customer"
        value={input}
        onChangeText={setInput}
        containerStyle={[
          {
            backgroundColor: "white",
            paddingTop: 15,
            paddingBottom: 5,
            borderTopEndRadius: 30,
            borderBottomLeftRadius: 30,
          },
          tw('px-10'),
        ]}
      />
    </ScrollView>
  );
};

export default CustomersScreen;
