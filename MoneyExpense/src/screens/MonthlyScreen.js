import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HorizontalList } from '../components/filter-list/HorizontalList';
import { monthsData } from '../components/dummy-data/rawdata';

const MonthlyScreen =()=> {
    const [selected, setSelected] = useState(   {
        id: 1,
        value: "01",
        name: "January",
        shortName: "Jan"
    })
    const handleMonthFilter =(txt)=>{
        setSelected(txt)
        console.log('txt--->', txt);
    }
  return (
    <View style={{flex:1}}>
        <HorizontalList data={monthsData} childToParent={handleMonthFilter} selected={selected}/>
    </View>
  )
}

export default MonthlyScreen;


const styles = StyleSheet.create({
    conatiner:{

    },

})

