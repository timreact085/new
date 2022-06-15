import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
            {/* <View style={styles.actions}>
                <Button
                    disabled={false}
                    title="Çıxış Et"
                />
                <Button
                    disabled={false}
                    title="Yenilə"
                />

            </View> */}
        </View>
    )

}


const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: 50,
        paddingTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    headerTitle: {
        color: 'white',
        fontSize: 18
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '30%',
        paddingHorizontal: 100,
        marginTop : '7%'
      }


})

export default Header;