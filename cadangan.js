import React from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import Home from './components/Home';
import Explore from './components/Explore';
import AddBar from './components/AddBar';
import Notification from './components/Notification';
import Profile from './components/Profile';
import colors from './assets/colors/colors';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useRef } from 'react';
import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.blue,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
        tabBarIcon: ({color}) => (
        <Feather name="home" size={22} color={color} />
        ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}>
      </Tab.Screen>

      <Tab.Screen 
        name="Explore" 
        component={Explore}
        options={{
        tabBarIcon: ({color}) => (
        <FontAwesome5 name="compass" size={23} color={color} />
        ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 1.12,
              useNativeDriver: true
            }).start();
          }
        })}>
      </Tab.Screen>
      <Tab.Screen name="AddBar" component={AddBar}/>
      <Tab.Screen name="Notification" component={Notification}/>
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  );
};

export default function App() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
//const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <Animated.View style={{
        width: getWidth() - 25,
        height: 2.25,
        backgroundColor: '#8261E0',
        position: 'absolute',
        bottom: 71,
        // Horizontal Padding = 20...
        left: 35,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>
      </Animated.View>
    </NavigationContainer>
  );
};

function getWidth() {
  let width = Dimensions.get("window").width
  // Horizontal Padding = 20...
  width = width - 80
  // Total five Tabs...
  return width / 5
}
function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.whiteGray,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: -17,
    height: 90,
    shadowColor: '#CBCEF2',
    shadowOpacity: 0.08,
    shadowOffset: {
    width: 10,
    height: 10
    },
  }
});




<Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>