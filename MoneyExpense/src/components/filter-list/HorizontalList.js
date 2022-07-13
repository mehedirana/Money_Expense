import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { COLORS } from '../../styles/theme'


export const HorizontalList = ({ data, childToParent, selected }) => {

    const RenderList = ({ item, i }) => {
        return (
            <TouchableOpacity style={{paddingHorizontal:10}} onPress={()=> childToParent(item)}>
                <Text style={{color: selected?.id === item?.id ? COLORS.whitePure : COLORS.black, padding:5, backgroundColor: selected?.id === item?.id ? COLORS.primary : COLORS.lightGray50, borderRadius:9, fontSize:16, fontWeight:'bold'}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, marginTop:10 }}>
            {
                data && <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    key={(item) => item.id}
                    renderItem={RenderList}
                    // ItemSeparatorComponent={()=> <View style={{width:20}}/>}
                />
            }
        </SafeAreaView>
    )
}