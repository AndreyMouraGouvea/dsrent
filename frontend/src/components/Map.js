import React from 'react';
import MapView, { Provider, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// https://docs.expo.dev/versions/latest/sdk/map-view/


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width/height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {

  latitude: -24.288397941221866,
  longitude: -46.979601872724416,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};





function Map() {
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map} 
      provider={PROVIDER_GOOGLE}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map