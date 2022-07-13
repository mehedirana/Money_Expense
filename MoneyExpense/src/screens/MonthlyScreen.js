import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { HorizontalList } from '../components/filter-list/HorizontalList';
import { monthsData } from '../components/dummy-data/rawdata';
import { useSelector } from 'react-redux';
import { ExpenseList } from '../components/home/ExpenseList';
import { COLORS } from '../styles/theme';

const MonthlyScreen = () => {
  const [selected, setSelected] = useState({
    id: 1,
    value: "01",
    name: "January",
    shortName: "Jan"
  })

  const [filterData, setFilterData] = useState([])

  const { expense } = useSelector((e) => e.expenseList)

  useEffect(() => {
    if (selected && expense) {
      const temp = expense?.filter((e) => e.time?.match(selected?.shortName))
      setFilterData(temp)
      console.log('-------temp---->', temp, 'pppppp--------->', expense[0]?.time);
    }
  }, [selected])
  const handleMonthFilter = (txt) => setSelected(txt)

  return (
    <SafeAreaView style={{ flex: 1, marginVertical: 10 }}>
      <HorizontalList data={monthsData} childToParent={handleMonthFilter} selected={selected} />
      {filterData?.length > 0 ? <ExpenseList data={filterData} /> : <Text style={{textAlign:'center', marginTop:40}}>No expense found</Text>}

    </SafeAreaView>
  )
}

export default MonthlyScreen;


const styles = StyleSheet.create({
  conatiner: {

  },

})

