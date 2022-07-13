import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { COLORS } from '../styles/theme'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { CategoryList } from '../components/category/CategoryList';
import { MonthList } from '../components/category/MonthList';
import uuid from 'react-native-uuid';
import { useDispatch } from 'react-redux';
import { addToExpense } from '../store/expense/expenseAction';

const downArrow = require('../assets/arrow_down.png');


const AddExpenseScreen = ({navigation}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [visibleMonths, setVisibleMonths] = useState(false)
    const [selectedCat, setSelectedCat] = useState(null)
    const [amount, setAmount] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null)
    const [date, setDate] = useState(new Date());


    const dispatch = useDispatch()


    const showDatepicker = () => showMode('date');
    const showTimepicker = () => showMode('time');

    const handleSaveExpense = (getTime) => {
        if (!selectedCat) Alert.alert('Empty Field Error', 'Category needed')
        else if (!amount) Alert.alert('Empty Field Error', 'Amount needed')
        else if (!getTime) Alert.alert('Empty Field Error', 'Time and Date not found')
        else {

            const data = {}
            data.expenseId = uuid.v4()
            data.category = selectedCat;
            data.expenseAmount = amount;
            data.time = getTime

            if (data !== {}) {
                dispatch(addToExpense(data))
                setSelectedMonth(null)
                setSelectedCat(null)
                setAmount(0)
                navigation.navigate('Home')

            }
        }
    }


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true
        })
    };

    const childToParent = (data) => setSelectedCat(data)

    const childToParentMonths = (data) => setSelectedMonth(data)

    return (
        <View style={styles.conatiner}>
            {visibleMonths && <MonthList visbleMonths={visibleMonths} setVisibleMonths={setVisibleMonths} childToParentMonths={childToParentMonths} />}
            {isVisible && <CategoryList isVisble={isVisible} setIsVisible={setIsVisible} childToParent={childToParent} />}
            <TouchableOpacity onPress={() => setIsVisible(true)}>
                <Text style={styles.catTxt}>{selectedCat ? selectedCat?.categoryName : 'Select a Category'} </Text>
            </TouchableOpacity>
            <TextInput style={{ borderBottomWidth: 1, marginTop: 10, fontSize: 16, color: COLORS.primary, borderColor: COLORS.gray }}
                keyboardType='numeric'
                placeholder='Insert Ammount'
                placeholderTextColor={COLORS.gray}
                onChangeText={(e) => setAmount(e)}
            />

            <TouchableOpacity style={styles.timeCard} onPress={showDatepicker}>
                <Text style={styles.timeTxt}>Select Date</Text>
                <Image style={{ resizeMode: 'contain', height: 25, width: 25, alignSelf: 'center' }} source={downArrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeCard} onPress={showTimepicker}>
                <Text style={styles.timeTxt}>Select time</Text>
                <Image style={{ resizeMode: 'contain', height: 25, width: 25, alignSelf: 'center' }} source={downArrow} />
            </TouchableOpacity>

            <Text style={{ ...styles.catTxt, color: COLORS.black }}>Selected Date: {date.toLocaleString()}</Text>



            <TouchableOpacity style={{ backgroundColor: COLORS.primary, borderRadius: 9, marginTop: 50 }} onPress={() => handleSaveExpense(date.toLocaleString())}>
                <Text style={{ color: COLORS.whitePure, paddingVertical: 10, textAlign: 'center', fontSize: 22 }}>Save Expense</Text>
            </TouchableOpacity>


        </View>
    )
}


export default AddExpenseScreen;


const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        marginHorizontal: 30
    },
    catTxt: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: COLORS.gray,
        color: COLORS.primary,
        marginTop: 20,
        paddingBottom: 5
    },
    timeTxt: {
        fontSize: 16,
        borderColor: COLORS.gray,
        color: COLORS.primary,
        paddingBottom: 5

    },
    timeCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    }

})
