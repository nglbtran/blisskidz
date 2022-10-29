import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Users = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View>
          <View
            style={{
              marginLeft: 40,
              marginTop: 20,
            }}
          >
            <Image
              style={{ width: '15%', height: 40 }}
              source={require('../assets/happy.png')}
            />
          </View>
        </View>
        <View
          style={{
            height: 'auto',
            width: '85%',
            backgroundColor: 'white',
            marginTop: '5%',
            alignSelf: 'center',
            paddingBottom: 20,
            borderRadius: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                marginTop: 29,
                alignSelf: 'center',
              }}
            >
              Cá Nhân
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/girl.png')}
              style={{ borderRadius: 60, alignSelf: 'center', marginTop: 20 }}
            />
          </View>
          <View style={{ alignSelf: 'center', marginTop: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome name="phone" size={24} color="#FFAC30" />
              <Text style={{ fontSize: 12, marginLeft: 15 }}>
                (+33)6 55 59 16 45
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <Ionicons name="mail-outline" size={24} color="#FFAC30" />
              <Text style={{ fontSize: 12, marginLeft: 15 }}>
                janecooper@gmail.com
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <Ionicons name="location-sharp" size={24} color="#FFAC30" />
              <Text style={{ fontSize: 12, marginLeft: 15 }}>
                29 Vũ Phạm Hàm - Cầu Giấy - Hà Nội
              </Text>
            </View>
          </View>
          <View
            style={{ alignSelf: 'center', marginTop: 30, paddingBottom: 40 }}
          >
            <View
              style={{
                height: 46,
                width: 248,
                borderRadius: 35,
                backgroundColor: '#FFAC30',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  marginTop: 14,
                  fontSize: 16,
                  fontWeight: '700',
                }}
              >
                Edit Profile
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Image
          source={require('../assets/hoatiet.png')}
          style={{ width: '110%' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ade2e6',
  },
  background: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  footer: {
    flex: 12,
    backgroundColor: '#FFF9EC',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Users;
