import React from 'react'
import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';

function Splash() {

    
    const [loop, setLoop] = useState(true);

    useEffect(
        () => {
            let timer = setTimeout(() => setLoop(false), 60000);
            return () => {
                clearTimeout(timer)
            };
        }, []);

    return (

            <View style={styles.container}>
                <LottieView
                    source={require('../assets/splash.json')}
                    autoPlay
                    autoSize
                    duration={0.1}
                    loop={loop}


                />
            </View>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})

export default Splash