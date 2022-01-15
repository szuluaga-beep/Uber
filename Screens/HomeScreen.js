import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import NavOptions from '../components/NavOptions';


const HomeScreen = () => {
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
          <NavOptions>
            
          </NavOptions>
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
