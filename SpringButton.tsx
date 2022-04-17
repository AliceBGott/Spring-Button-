import React, {FunctionComponent, useEffect, useRef } from "react";
import {View, Pressable, Text, StyleSheet, Animated} from "react-native";

const SpringButton: FunctionComponent = () => {
    const animatedScale = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        animatedScale.setValue(1);
    }, []);
    
    const handleButtonPress = () => {
        animatedScale.setValue(0.8);
        Animated.spring(animatedScale, {
            toValue: 1,
            bounciness: 24,
            speed: 20,
            useNativeDriver: true,
        }).start();
    };

    return<>
        <View style = {style.container}>
            <Pressable onPress={handleButtonPress}>
                <Animated.View style = {[style.button, {transform: [{scale: animatedScale}]}]}>
                    <Text style = {style.buttonText}>
                        Spring Day has come!
                    </Text>
                </Animated.View>
            </Pressable>
        </View>
   </> 
};


const style = StyleSheet.create({
    //estilo do container, do botao e do texto do botao
    //          viw de fora, view de dentro, text

    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'purple',
        width: 200,
        height: 90,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'menlo',

    },
});

export default SpringButton;