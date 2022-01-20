import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APYKEY } from "@env";

const HomeScreen = () => {
  const googleapikey = "AIzaSyAFj8G9U07gFHd4wGiiMgqM - kZmwARliCY";
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
              console.log(data);
              console.log(details);
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: GOOGLE_MAPS_APYKEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
          <NavOptions />
        </View>
      </SafeAreaView>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
});
