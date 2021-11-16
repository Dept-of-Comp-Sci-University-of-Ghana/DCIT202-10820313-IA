import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

function MainCategory() {

    const [category, setCategory] = useState("EXPLORE")

    const genders= [
        "EXPLORE",
        "13 pro max",
        "13 pro",
        "13",
        "12 pro max",
        "12 pro",
        "12",
        "11 pro max",
        "11 pro",
        "11",
        "Xs max",
        "Xs",
        "XR",
        "X",
        "8 plus",
        "8",
        "7 plus",
        "7",
        "6s plus",
        "6s",
        "6 plus",
        "6",
    ]

    const renderItem = (item) => (
        <TouchableOpacity 
            style={styles.category}  
            onPress={() => setCategory(item)}
            >
            <Text style={[
                styles.categoryText,
                { color: category === item ? COLORS.black : COLORS.darkgray }
            ]} >
                {`iPhone ${item} `}
            </Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container} >
            <Text style={styles.textMain} >
                Perfect iShop
            </Text>
            <Text style={styles.textMain}>
                Shop now
            </Text>
            <FlatList
                data={genders}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={ (item, index) => 'key' + index }
                key={ (item, index) => 'key' + index }
                renderItem={ item =>  renderItem(item.item)}
                contentContainerStyle={{ paddingVertical: SIZES.padding* 2 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding * 2,
        // backgroundColor: COLORS.primary 
    },
    textMain: {
        ...FONTS.h1,
        fontWeight: 'bold',
        color: COLORS.black
    },
    category: {
        marginRight: SIZES.padding
    },
    categoryText: {
        ...FONTS.h5,
        fontWeight: 'bold',

    }
})

export default MainCategory
