import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default function SwiperComponent2() {
 return (
   <Swiper
   style={styles.wrapper}
   dotStyle={{
     backgroundColor: '#000',
     borderColor: '#000',
     borderWidth: 1,
     width: 10,
     height: 10,
     borderRadius: 10,
   }}
   activeDotColor="#FFF"
   activeDotStyle={{
     borderColor: '#000',
     borderWidth: 1,
     width: 10,
     height: 10,
     borderRadius: 10,
   }}
   >

     <View style={styles.slide}>
      <Image
      source={require('../assets/feira.jpg')}
      style={{ width: '100%', height: 400}}
      />
     </View>

     <View style={styles.slide}>
      <Image
      source={require('../assets/feira2.jpg')}
      style={{ width: '100%', height: 400}}
      />
     </View>

     <View style={styles.slide}>
      <Image
      source={require('../assets/feira3.jpg')}
      style={{ width: '100%', height: 400}}
      />
     </View>

   </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper:{

  },
  slide:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})