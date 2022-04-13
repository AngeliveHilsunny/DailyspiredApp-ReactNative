import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 23,
        shadowColor: "#CBCEF2",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.01,
        shadowRadius: 3,
        elevation: 15,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#3C48F2',
        opacity: 0.4,
        borderRadius: 11,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '90%',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#6E6E6E'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#3C48F2',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;