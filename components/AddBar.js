import React, { useState } from 'react';
import {
    KeyboardAvoidingView, 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Keyboard, 
    ScrollView, 
    Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Task from './Task';


const AddBar = ({navigation}) => {
const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }

    return (
        <View style={styles.container}>
            
            <Image source={require('../assets/images/circle.png')} style={styles.circle} />
            <Image source={require('../assets/images/circle2.png')} style={styles.circle2} />
            {/* Scroll Settings */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >

                {/* Tasks Title and List*/}
                <View style={styles.tasksWrapper}>
                    <View style={styles.header}>
                        <TouchableOpacity
                        style={styles.backIcon}
                        onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles.middle}>Today</Text>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="timer-outline" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.contents}>
                        <View style={styles.title}>
                            <Text style={styles.sectionTitle}>Plan</Text>
                            <Text style={styles.sectionSubTitle}>What's your plan?</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.manage}>
                                <Text style={styles.addManageText}>Manage</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.items}>
                    {/* Complete Task */}
                    {
                        taskItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                    <Task text={item} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>

            {/* Write a task */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Create new task'} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7FB',
    },
    header: {
        paddingTop: 60,
        paddingBottom: 35,
        paddingHorizontal: 20,
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    middle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    tasksWrapper: {
        backgroundColor: '#3C48F2',
        borderBottomLeftRadius: 40,
        shadowColor: "#080E68",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    contents: {
        paddingBottom: 35,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    sectionSubTitle: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.5,
    },
    items: {
        marginTop: 45,
        paddingHorizontal: 28,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 13,
        paddingHorizontal: 30,
        backgroundColor: '#FFF',
        borderRadius: 60,
        width: 280,
        shadowColor: "#CBCEF2",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 15,
    },
    addWrapper: {
        width: 55,
        height: 55,
        backgroundColor: '#3C48F2',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#4A53C8",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 15,
    },
    addText: {
        color: '#FFF',
        fontSize: 20,
    },
    manage: {
        width: 100,
        height: 48,
        backgroundColor: '#FFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#2F3366",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 15,
    },
    addManageText: {
        color: '#3C48F2',
        fontSize: 16,
        fontWeight: 'bold',
    },
    circle: {
        position: 'absolute',
        width: 400,
        height: 400,
        margin: -160,
        marginTop: 580,
    },
    circle2: {
        position: 'absolute',
        width: 150,
        height: 150,
        margin: 300,
        marginTop: 200,
    },
});

export default AddBar;