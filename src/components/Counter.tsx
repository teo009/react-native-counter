import React, { useState } from 'react'
import { Button, TouchableOpacity, View, Text, StyleSheet, } from 'react-native';

const Counter = () => {

    const [cantidad, setCantidad] = useState(10)

    const handlePlus = () => {
        setCantidad(cantidad + 1)
    }

    const handleLess = () => {
        setCantidad(cantidad -1)
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                {cantidad}
            </Text>

            <TouchableOpacity 
                style={styles.buttonPlus}
                onPress={handlePlus}
            >
                <Text style={styles.textButton}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.buttonLess}
                onPress={handleLess}
            >
                <Text style={styles.textButton}>-1</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 200,
        color: 'darkslategrey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: 'white',
        fontSize: 25,
    },
    buttonPlus: {
        backgroundColor: 'darkslategrey',
        borderRadius: 100,
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    buttonLess: {
        backgroundColor: 'darkslategrey',
        borderRadius: 100,
        height: 70,
        width: 70,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 20
    }
})
