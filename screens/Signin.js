import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

function Signin() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar />
      <View>
          <Image
            style={{width: vw(100) , height: vw(25), marginLeft: 0 }}
            source={require('../assets/cloud.png')}
          />
        </View>
      <View>
        <View>
        <View
            style={{
              width: vw(80),
              backgroundColor: '#FFFFFF',
              alignSelf: 'center',
              borderRadius: 20,
              alignItems: 'center',
              paddingVertical: vw(8)
            }}
          >
            <View>
              <Image source={require('../assets/logo.png')} />
            </View>
            <View style={{ marginTop: vw(2)}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  textAlign: 'center',
                  color: '#FFAC30',
                }}
              >
                Blisskidz
              </Text>
            </View>
            <View style={{ marginTop: 19 }}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  fontSize: 22,
                  letterSpacing: 1.5,
                  lineHeight: 30,
                  fontWeight: 'bold',
                }}
              >
                Đăng nhập
              </Text>
            </View>

            <View style={{ marginTop: 28 }}>
              <View
                style={{
                  marginHorizontal: '5%',
                  backgroundColor: 'white',
                  borderRadius: 35,
                  borderColor: '#FFAC30',
                  height: vw(12),
                  width: vw(60),
                  borderWidth: 1,
                }}
              >
                <TextInput
                  style={{
                    height: vw(12),
                    width: vw(60),
                    paddingLeft: vw(4),
                  }}
                  placeholder="user name"
                />
              </View>
              <View
                style={{
                  marginHorizontal: '5%',
                  backgroundColor: 'white',
                  borderRadius: 35,
                  marginTop: vw(2),
                  borderColor: '#FFAC30',
                  borderWidth: 1,
                  
                }}
              >
                <TextInput
                  style={{
                    height: vw(12),
                    width: vw(60),
                    paddingLeft: vw(4),
                  }}
                  secureTextEntry={true}
                  placeholder="password"
                />
              </View>
            </View>
            <View style={{ marginTop: vw(8) }}>
              <Button
                style={{
                  borderRadius: 35,
                  width: vw(60),
                  height: vw(12),
                  backgroundColor: '#FFAC30',
                  justifyContent: 'center',
                }}
                mode="contained"
                onPress={() => navigation.navigate('Tabs')}
              >
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Đăng nhập</Text>
              </Button>
            </View>

            <View style={{ marginTop: 29 }}>
              <Text>hoặc tiếp tục với</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: '5%', justifyContent: 'space-evenly', width: '100%'}}>
              <View
                style={{
                  width: vw(30),
                  height: vw(8),
                  borderRadius: 6,
                  backgroundColor: '#EEF1F4',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                
                }}
              >
                <Image
                  source={require('../assets/facebook_icon.png')}
                  style={{ marginRight: 11.5 }}
                />
                <Text>Facebook</Text>
              </View>

              <View
                style={{
                  width: vw(30),
                  height: vw(8),
                  borderRadius: 6,
                  backgroundColor: '#EEF1F4',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../assets/google_icon.png')}
                  style={{ marginRight: 11.5 }}
                />
                <Text>Google</Text>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ textAlign: 'center' }}>
                Bạn đã có tài khoản chưa?{' '}
                <Text style={{ color: '#FFAC30' }}>Đăng ký</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={{justifyContent: 'center',}}>
          <Image
            source={require('../assets/bottomBack.png')}
            style={{width: vw(100), height: vw(50)}}
            resizeMode="center"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ade2e6',
  },
});

export default () => {
  return <Signin />;
};
