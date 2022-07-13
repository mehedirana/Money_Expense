import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../styles/theme';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{color:COLORS.black}}>HomeScreenffffffffffff</Text>
            <Text>HomeScreenffffffffffff</Text>
            <Text>HomeScreenffffffffffff</Text>
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.red
    }
})