import React from 'react';
import MapView, { Provider, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants'
// https://docs.expo.dev/versions/latest/sdk/map-view/
// https://www.npmjs.com/package/react-native-google-places-autocomplete


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {

  latitude: -24.288397941221866,
  longitude: -46.979601872724416,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
const GOOGLE_API_KEY = 'AIzaSyB3YB8Sd-DiKYY-9uN9Sg1qMFkTa95TA7Q';


// AIzaSyB3YB8Sd-DiKYY-9uN9Sg1qMFkTa95TA7Q


function Map() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
      />
      <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
        styles={{
          textInput: styles.input
        }}
        placeholder='Origem'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'pt-BR',
        }}
      />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  searchContainer: {
    position: 'absolute',
    width: '90%',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      wdith: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: Constants.statusBarHeight,

  },
  input: {

  }
});

export default Map