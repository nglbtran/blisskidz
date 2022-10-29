import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Button, List } from 'react-native-paper';
import { category } from '../components/data';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
function Splash({ navigation }) {
  
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image
            style={{width: vw(100) , height: vw(40), marginLeft: 0 }}
            source={require('../assets/cloud.png')}
          />
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
            <View style={{ marginTop: vw(4)}}>
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

            <View style={{ marginTop: vw(4)}}>
              <Text
                style={{ fontWeight: '400', fontSize: 16, textAlign: 'center', width: vw(60) }}
              >
                Nhấn vào Chấp nhận và Tiếp tục để  xác nhận bạn đã xem lại và chấp nhận. Điều khoản sử dụng và chính sách bảo bảo mật của chúng tôi
              </Text>
            </View>

            <View style={{ marginTop: vw(4) }}>
              <Text
                style={{ fontWeight: '700', fontSize: 16, textAlign: 'center' }}
              >Điều khoản sử dụng
              </Text>
            </View>

            <View style={{ marginTop: vw(6) }}>
              <Text
                style={{ fontWeight: '700', fontSize: 16, textAlign: 'center' }}
              >Chính Sách Sử Dụng
              </Text>
            </View>

            <View style={{ marginTop: vw(8) }}>
            
              <Button
                style={{
                  width: 264,
                  height: 60,
                  justifyContent: 'center',
                  borderRadius: 30,
                  backgroundColor: '#FFAC30',
                }}
                mode="contained"
                onPress={() => navigation.navigate('Sign in')}
              >
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                ĐỒNG Ý VÀ TIẾP TỤC</Text>
              </Button>
            </View>
            
            
          </View>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
          <Image
            source={require('../assets/bottomBack.png')}
            style={{width: vw(100), height: vw(50)}}
            resizeMode="center"
          />
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

export default Splash;
