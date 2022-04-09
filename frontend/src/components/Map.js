import * as React from 'react';
import { useState } from 'react';
import MapView, { Callout, Marker, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function Map() {

  const [pin, setPin] = useState({
    latitude: -24.288397941221866,
    longitude: -46.979601872724416
  })


  return (

    <View style={styles.container}>
      {/* <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyB3YB8Sd-DiKYY-9uN9Sg1qMFkTa95TA7Q',
          language: 'en',
        }}
        styles={{row: {backgroundColor: '#516'} }}
   

      /> */}
      
      <MapView style={styles.map}
        initialRegion={{
          latitude: -24.288397941221866,
          longitude: -46.979601872724416,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          // -24.288397941221866, -46.979601872724416
        }}
        provider="google"
      >
        <Marker
          coordinate={pin}
          pinColor='#FFF'
          draggable={true}
          onDragStart={(e) => {
            console.log('drag start', e.nativeEvent.coordinate)
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}

        >
          <Callout>
            <Text style={styles.title}>Etec de Peruibe</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />


        {/* https://docs.expo.dev/versions/latest/sdk/location/ */}
        {/* https://docs.expo.dev/versions/latest/sdk/map-view/ */}
        {/* https://github.com/react-native-maps/react-native-maps */}
        {/* https://github.com/react-native-geolocation/react-native-geolocation */}
        {/* https://github.com/react-native-maps/react-native-maps/blob/master/docs/marker.md */}
        {/* https://www.youtube.com/watch?v=qlELLikT3FU */}
        {/* {https://github.com/FaridSafi/react-native-google-places-autocomplete} */}
        {/* AIzaSyB3YB8Sd-DiKYY-9uN9Sg1qMFkTa95TA7Q */}


      </MapView>
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
  title: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 18,
    color: '#4f4a4a'
  },
});

export default Map