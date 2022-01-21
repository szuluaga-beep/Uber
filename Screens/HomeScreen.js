import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APYKEY } from "@env";
import { useDispatch } from "react-redux";

import NavOptions from "../components/NavOptions";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description:data.description
            }));
            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType={"Search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APYKEY,
            language: "es",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
