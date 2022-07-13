import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import { useDispatch } from 'react-redux'
import { removeFromExpense } from '../../store/expense/expenseAction'
import { COLORS } from '../../styles/theme'

export const ExpenseList = ({ data }) => {
    const dispatch = useDispatch()
    const handleDelete = (item) => dispatch(removeFromExpense(item))

    const RenderList = ({ item, index }) => {
        return (
            <View style={styles.card}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.catTxt} >{item?.category?.categoryName}</Text>
                <Text style={styles.catTxt} >{item?.time}</Text>
                </View>
                
                <Text>{item?.expenseAmount}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => handleDelete(item)}>
                        <Text style={{ color: COLORS.red }}>Delete</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity>
                        <Text style={{ color: COLORS.primary }}>Edit</Text>
                    </TouchableOpacity> */}

                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {
                data && <FlatList
                    data={data}
                    renderItem={RenderList}
                    key={(item) => item.expenseId}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    card: {
        backgroundColor:COLORS.lightGray50,
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 2,
        padding: 10,
        borderRadius:9,
        marginBottom:5
    },
    catTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black50
    },
})