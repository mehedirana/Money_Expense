import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { COLORS } from '../styles/theme';
import { useSelector } from 'react-redux';
import { ExpenseList } from '../components/home/ExpenseList';


const addImage = require('../assets/plus.png')


const HomeScreen = ({navigation}) => {
    const { expense } = useSelector((e) => e.expenseList)

    return (
        <SafeAreaView style={styles.container}>
            {
                expense?.length > 0 ? <ExpenseList data={expense} /> : <Text style={{ flex: 1, fontSize: 20, marginLeft: 20, marginTop: 20, color: COLORS.black50 }}>Add your expense</Text>
            }

            <TouchableOpacity onPress={() => navigation.navigate('Add Expense')} style={{ flexDirection: 'row-reverse', marginBottom: 20, marginLeft: 30, }}>
                <Image source={addImage} style={{ resizeMode: 'contain', height: 50, width: 50, }} />
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.whitePure
    }
})