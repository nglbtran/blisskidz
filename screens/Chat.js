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

const Chat = () => {
  const list = [
    {
      id: 1,
      img: require('../assets/girl.png'),
      name: 'Hoa Giấy',
      message: 'Sản phẩm gấp giấy mới',
      time: '18:38',
    },
    {
      id: 2,
      img: require('../assets/girl.png'),
      name: 'Thiên An',
      message: 'Sản phẩm gấp giấy mới',
      time: '18:38',
    },
    {
      id: 3,
      img: require('../assets/girl.png'),
      name: 'Minh Khôi',
      message: 'Sản phẩm gấp giấy mới',
      time: '18:38',
    },
    {
      id: 4,
      img: require('../assets/girl.png'),
      name: 'Mai Anh',
      message: 'Sản phẩm gấp giấy mới',
      time: '18:38',
    },
    {
      id: 5,
      img: require('../assets/girl.png'),
      name: 'Thiền Hà',
      message: 'Sản phẩm gấp giấy mới',
      time: '18:38',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.background}>
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
              Tin Nhắn
            </Text>
          </View>
          {list.map((data, index) => {
            return (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 65,
                    width: '75%',
                    alignSelf: 'center',
                    marginTop: 5,
                  }}
                >
                  <View style={{ marginRight: 15 }}>
                    <Image
                      source={data.img}
                      style={{ height: 60, width: 60, borderRadius: 50 }}
                    />
                  </View>
                  <View style={{ marginRight: 39 }}>
                    <Text style={{ fontWeight: 'bold' }}>{data.name}</Text>
                    <Text style={{ color: '#898A8D', fontSize: 10 }}>
                      {data.message}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#898A8D', fontSize: 10 }}>
                      {data.time}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
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

export default Chat;
