import * as React from 'react';
import MapView, { Callout, Marker, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

function Map() {

    const lat = -24.288397941221866;
    const long = -46.979601872724416;

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        // -24.288397941221866, -46.979601872724416
    }}
      >
        <Marker 
        coordinate={{
            latitude: lat,
            longitude: long,
        }}
        pinColor='#FFF'
        // title='Etec de Peruibe'

        >
            <Callout>
                <Text style={styles.title}>Etec de Peruibe</Text>
            </Callout>
     </Marker>
     <Circle 
     center={{
         latitude: lat,
         longitude: long
     }}
     radius={1000}
     
     />
        {/* https://docs.expo.dev/versions/latest/sdk/location/ */}
        {/* https://docs.expo.dev/versions/latest/sdk/map-view/ */}
        {/* https://github.com/react-native-maps/react-native-maps */}
        {/* https://github.com/react-native-geolocation/react-native-geolocation */}
        {/* https://github.com/react-native-maps/react-native-maps/blob/master/docs/marker.md */}
        {/* https://www.youtube.com/watch?v=qlELLikT3FU */}


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
  }
});

export default Map