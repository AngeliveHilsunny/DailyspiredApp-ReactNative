import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { 
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic 
} from '@expo-google-fonts/lato'
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import newTask from '../assets/data/newTask';
import categoriesData from '../assets/data/categoriesData';
import inspirationData from '../assets/data/inspirationData';
import discoverData from '../assets/data/discoverData';
import {SafeAreaView} from 'react-native-safe-area-context';
import profile from '../assets/images/photoProfile.png';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useFonts} from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';

import forest from '../assets/images/Forest2.jpg';
import interior from '../assets/images/designInterior.jpg';

Feather.loadFont();

const Home = ({navigation}) => {
    let [fontsLoaded, error] = useFonts ({
        Lato_100Thin,
        Lato_100Thin_Italic,
        Lato_300Light,
        Lato_300Light_Italic,
        Lato_400Regular,
        Lato_400Regular_Italic,
        Lato_700Bold,
        Lato_700Bold_Italic,
        Lato_900Black,
        Lato_900Black_Italic 
    });

    if (!fontsLoaded) {
        return <AppLoading/>
    }
    const renderDiscoverItem = ({item}) => {
        return (
        <TouchableOpacity
            onPress={() =>
            navigation.navigate('Details', {
                item: item,
            })
            }>
                <View style={styles.coverAllItems}>
                        <View style={styles.cover}>
                                <View
                                style={[
                                    styles.discoverItem,
                                    {marginLeft: item.id === 'discover-1' ? 10 : 0},
                                ]}>
                                <View style={styles.textItems}>
                                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                                    <Text style={styles.discoverItemAuthorText}>{item.author}</Text>
                                    <Text style={styles.discoverItemDescriptionText}>{item.description}</Text>
                                </View>
                                <View style={styles.imageItemsContainer}>
                                    <Image source={item.image} style={styles.imageItems}/>
                                </View>
                                <View style={styles.loveSet}>
                                    <Ionicons
                                    name="heart-outline"
                                    size={16.7}
                                    color={colors.white}
                                    style={{}}
                                    />
                                </View>
                            </View>
                        </View>
                </View>
        </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
        <ScrollView>
        {/* Header */}
            <SafeAreaView>
                <View style={styles.menuWrapper}>
                    <Feather
                    name="bar-chart-2"
                    size={24}
                    color={colors.black}
                    style={{
                        marginTop: 18, transform: [{rotate: '90deg'}]}}
                    />
                    <Image source={profile} style={styles.profileImage} />
                </View>
            </SafeAreaView>

            {/* Discover */}
            <View style={styles.discoverWrapper}>
                <Text style={styles.discoverTitle}>Discover</Text>
                <Text style={styles.subheader}>Welcome, <Text style={styles.name}>Angelive!</Text></Text>
                <View style={styles.mainCategoriesWrapper}>
                        <View style={styles.discoverCategoriesWrapper}>
                            <View style={styles.category}>
                                    <Text style={styles.discoverCategoryText}>Travel</Text>
                                    <Text style={[styles.discoverCategoryText, {color: colors.black}]}>
                                    Breakfast
                                    </Text>
                            </View>
                            {/* 
                            <FlatList 
                            horizontal
                            showsHorizontalScrollIndicator={false}>
                                <View style={styles.category}>
                                    <Text style={[styles.discoverCategoryText, {color: colors.black}]}>
                                    Breakfast
                                    </Text>
                                    <Text style={styles.discoverCategoryText}>Travel</Text>
                                </View>
                            </FlatList>
                            */}
                        </View>
                    <View style={styles.itemsWrap}>
                        <View style={styles.discoverItemsWrapper}>
                            <FlatList
                                data={discoverData}
                                renderItem={renderDiscoverItem}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </View>
            </View>

            {/* Task */}
            <TouchableOpacity
                onPress={() =>
                navigation.navigate('AddBar')
                }>
                <View style={styles.taskWrapper}>
                    <View style={styles.taskTitle}>
                        <Text style={styles.taskMainTitle}>Create new task</Text>
                        <Text style={styles.taskSubtitle}>You can create new task here</Text>
                    </View>
                    <Ionicons
                        name="add-circle"
                        size={32}
                        color={colors.blue}
                        style={{
                            shadowColor: colors.blue,
                            shadowOffset: {
                                width: 5,
                                height: 12,
                            },
                            shadowOpacity: 0.8,
                            shadowRadius: 6.00,
                            elevation: 14
                        }}
                    />
                </View>
            </TouchableOpacity>
            

            {/* Inspiration */}
            <View style={styles.inspirationWrapper}>
                <Text style={styles.inspirationTitle}>Inspiration</Text>
                <View style={styles.inspirationItemsWrapper}>
                    <ImageBackground
                        source={forest}
                        style={[
                        styles.items,
                        ]}
                        imageStyle={styles.itemImage}>
                        <View style={styles.contentItem}>
                            <Text style={styles.titleItems}>Redwood National and State Parks</Text>
                            <Text style={styles.location}>US</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.flatItems}>
                        <View style={styles.contentItemFlat}>
                            <Text style={styles.titleItemsFlat}>Only 6 Exercises</Text>
                            <Text style={styles.titleItemsFlat}>You Need to Get a Six-Pack</Text>
                            <Text style={styles.subtitleItemsFlat}>The Best Abs Workout</Text>
                            <Text style={styles.decItemsFlat}>Want to look like Cristiano Ronaldo? We asked some of the country's best trainers to share their favorite abs exercises to get there.</Text>
                        </View>
                    </View>
                    <ImageBackground
                        source={interior}
                        style={[
                        styles.items,
                        ]}
                        imageStyle={styles.itemImage}>
                            <View style={styles.contentItem}>
                                <Text style={styles.titleItems}>Minimalist Dark Blue Design Interior</Text>
                            </View>
                    </ImageBackground>
                </View>
            </View>
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.WhiteGray,
        backgroundColor: '#F6F7FB',
    },
    menuWrapper: {
        marginHorizontal: 37,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    profileImage: {
        width: 72,
        height: 72,
        marginTop: 2,
    },
    discoverWrapper: {
        // marginHorizontal: 20,
        marginTop: -2,
    },
    discoverTitle: {
        marginHorizontal: 37,
        fontFamily: 'Lato_700Bold',
        fontSize: 40,
    },
    subheader: {
        marginHorizontal: 39,
        marginTop:3,
        color: colors.darkGray,
        fontFamily: 'Lato_400Regular',
        fontSize: 16,
    },
    name: {
        fontFamily: 'Lato_900Black',
        color: colors.blue
    },
    mainCategoriesWrapper:{
        flexDirection: 'row',
    },
    /*
    category:{
        marginLeft: -10,
        flexDirection: 'row',
        marginHorizontal:-60,
        marginTop: 5,
        marginLeft: -60,
    },*/
    category:{
        flexDirection: 'row',
        top: 20,
        position: 'relative',
        
    },
    discoverCategoriesWrapper: {
        flexDirection: 'row',
        paddingVertical: 50,
        bottom: -15,
        left: 58,
        marginTop: 50,
        transform: [{ rotate: '-90deg' }],
        width: 80,
    },
    /*
    discoverCategoriesWrapper:{
        flexDirection: 'row',
        marginHorizontal: 37,
        marginTop: 25,
    }, */
    discoverCategoryText: {
        marginRight: 30,
        fontFamily: 'Lato_700Bold',
        fontSize: 16,
        color: colors.darkGray,
    },
    cover: {
        paddingHorizontal: 15,
        marginRight: -22,
    },
    discoverItemsWrapper: {
        paddingVertical: -10,
    },
    discoverItem: {
        width: 145,
        height: 230,
        marginRight: 37,
        marginTop: 37,
        borderRadius: 27,
        backgroundColor: colors.white,
        shadowColor: colors.darkGray,
        shadowOffset: {
            width: 5,
            height: 12,
        },
        shadowOpacity: 0.1,
        shadowRadius: 56.00,
        elevation: 20,
        zIndex: 0,
        marginBottom:35,
    },
    textItems:{
        width: 145,
        height: 230,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        paddingVertical: 27,
    },
    discoverItemTitle: {
        fontFamily: 'Lato_900Black',
        fontSize: 13.8,
        color: colors.blue,
        paddingRight: 9.1,
    },
    discoverItemAuthorText:{
        color: colors.darkGray,
        fontSize: 10,
        marginTop: 6,
        fontFamily: 'Lato_700Bold',
    },
    discoverItemDescriptionText:{
        color: colors.darkGray,
        fontSize: 7,
        marginTop: 16,
    },
    imageItems: {
        width: 100,
        height: 100,
        zIndex: 2,
        marginLeft: 75,
        marginTop: -5,
    },
    imageItemsContainer:{
        position: 'absolute',
        justifyContent: 'flex-start',
        paddingHorizontal: 2,
        paddingVertical: 15,
    },
    loveSet:{
        backgroundColor: colors.blue,
        borderRadius: 60,
        width: 27,
        height: 27,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000FE4',
        shadowOffset: {
            width: 5,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 19.00,
        elevation: 10,
        left: -10,
        top: -2,
    },  
    taskWrapper: {
        backgroundColor:'#E9EAED',
        marginHorizontal: 37,
        borderRadius: 15,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 22,
        paddingVertical: 14,
        shadowColor: colors.gray,
        shadowOffset: {
            width: 5,
            height: 12,
        },
        shadowOpacity: 0.8,
        shadowRadius: 6.00,
        elevation: 14,
    },
    taskMainTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 14.6,
    },
    taskSubtitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 10,
        color: '#A5A6A6',
        marginTop: 2,
    },
    inspirationWrapper: {
        marginHorizontal: 37,
        marginTop: 30,
    },
    inspirationTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 18.5,
        marginBottom: -5,
    },
    inspirationItemsWrapper: {
        marginBottom: 70,
    },
    items: {
        height: 128,
        marginTop: 25,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    itemImage:{
        borderRadius: 15,
    },
    contentItem:{
        flexDirection: 'row',
        paddingBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    titleItems: {
        color: colors.white,
        fontFamily: 'Lato_900Black',
        fontSize: 17,
        width: 176.2,
    },
    location: {
        fontFamily: 'Lato_900Black',
        fontSize: 18,
        color: colors.white,
        
    },
    flatItems:{
        height: 140,
        marginTop: 25,
        paddingVertical:20,
        paddingHorizontal: 20,
        backgroundColor: '#E9EAED',
        borderRadius: 15,
        shadowColor: colors.gray,
        shadowOffset: {
            width: 5,
            height: 12,
        },
        shadowOpacity: 0.8,
        shadowRadius: 6.00,
        elevation: 14,
    },
    contentItemFlat:{
        
    },
    titleItemsFlat:{
        fontFamily: 'Lato_900Black',
        fontSize: 14.7,
        color: colors.blue,
    },
    subtitleItemsFlat:{
        fontFamily: 'Lato_700Bold',
        color: colors.veryDarkGray,
        fontSize: 11,
        marginTop: 4,
    },
    decItemsFlat:{
        fontSize: 10.7,
        color: colors.darkGray,
        fontFamily: 'Lato_400Regular',
        marginTop: 10,
        paddingBottom: 20,
},
});
export default Home;