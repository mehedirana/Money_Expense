import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { COLORS } from '../../styles/theme'
import { monthsData } from '../dummy-data/rawdata'



export const MonthList = ({ childToParentMonths, visbleMonths, setVisibleMonths }) => {

    const handleMonth = (data) => {
        childToParentMonths(data)
        setVisibleMonths(false)
    }
    return (
        <Modal
            animationInTiming={400}
            animationOutTiming={800}
            swipeDirection="down"
            swipeThreshold={200}
            backdropOpacity={0.3}
            isVisible={visbleMonths}
            onBackdropPress={() => setVisibleMonths(false)}
            onRequestClose={() => setVisibleMonths(false)}
            hasBackdrop={true}
        >
            <View style={{ backgroundColor: COLORS.whitePure }}>
                {
                    monthsData.map((el) => {
                        return (
                            <TouchableOpacity onPress={() => handleCategory(el)} key={el.categoryId}>
                                <Text style={styles.catTxt}>{el.categoryName}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    catTxt: {
        fontSize: 15,
        color: COLORS.blackSolid,
        paddingLeft: 20,
        paddingVertical: 10

    }

})