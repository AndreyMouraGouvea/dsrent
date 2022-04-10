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

  const [region, setRegion] = useState({
    latitude: -24.288397941221866,
    longitude: -46.979601872724416,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })



  return (

    // <View style={styles.container}>
    <View>
      <GooglePlacesAutocomplete
        placeholder='Digite a localização'
        minLength={2}
        autoFocus={false}
        returnKeyType={'default'}
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: 'distance'
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details)
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          })
        }}
        query={{
          key: 'AIzaSyB3YB8Sd-DiKYY-9uN9Sg1qMFkTa95TA7Q',
          language: 'en',
          components: 'country: br',
          types: 'establishment',
          radius: 3000,
          location: `${region.latitude}, ${region.longitude}`
        }}
        styles={{
          textInputContainer: {
            backgroundColor: '#FFF',
          },
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          container: {
            flex: 0,
            position: 'absolute',
            width: '100%',
            zIndex: 1
          },
          listView: {
            backgroundColor: '#FFF'
          }
        }}
      />

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
        <Marker coordinate={{
          latitude: region.latitude, longitude: region.longitude}}
          />



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
        {/* https://www.youtube.com/watch?v=KD6zbyyAdTo&ab_channel=FabioBergmann */}


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