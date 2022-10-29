import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import Splash from '../screens/Splash';
import Home from '../screens/Home';
import News from '../screens/News';
import Signin from '../screens/Signin';
import Users from '../screens/Users';

import Read from '../components/Read';
import Chat from '../screens/Chat';

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Stack" component={Home} />
    </HomeStack.Navigator>
  );
}

const ChatStack = createNativeStackNavigator();
function ChatStacks() {
  return (
    <RankingStack.Navigator screenOptions={{ headerShown: false }}>
      <RankingStack.Screen name="Chat Stack" component={Chat} />
    </RankingStack.Navigator>
  );
}

const NewsStack = createNativeStackNavigator();
function NewsStacks() {
  return (
    <NewsStack.Navigator screenOptions={{ headerShown: false }}>
      <NewsStack.Screen name="News Stack" component={News} />
      <NewsStack.Screen name="Read" component={Read} />
    </NewsStack.Navigator>
  );
}

const UserStack = createNativeStackNavigator();
function UserStacks() {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="User Stack" component={Users} />
    </UserStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#FFF9EC',
          width: '100%',
          height: '7%',
          shadowColor: '#FFF9EC',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FFAC30' : '#B8B8B8',
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../assets/news.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FFAC30' : '#B8B8B8',
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../assets/chat.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FFAC30' : '#B8B8B8',
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Users"
        component={UserStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../assets/user.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FFAC30' : '#B8B8B8',
                }}
              ></Image>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const RootStacks = createNativeStackNavigator();
function RootStack() {
  return (
    <NavigationContainer>
      <RootStacks.Navigator screenOptions={{ headerShown: false }}>
        <RootStacks.Screen name="Splash" component={Splash} />
        <RootStacks.Screen name="Sign in" component={Signin} />

        <RootStacks.Screen name="Tabs" component={Tabs} />

      </RootStacks.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
