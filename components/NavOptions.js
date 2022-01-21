import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";

import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order a food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin=useSelector(selectOrigin)
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={styles.container}
          disabled={!origin}
        >
          <View style={tw`${!origin&&"opacity-20"}`}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.texto}>{item.title}</Text>
            <Icon
              style={styles.icono}
              type="antdesign"
              name="arrowright"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  container: {
    padding: 20,
    backgroundColor: "#817c8d",
    margin: 5,
    width: 150,
  },
  texto: {
    marginTop: 5,
    fontWeight: "bold",
    textTransform: "uppercase",
    alignItems: "center",
    },
    icono: {
        padding: 3,
        backgroundColor: 'black',
        borderRadius: 80,
        width: 70,
        marginTop:10
  }
});
