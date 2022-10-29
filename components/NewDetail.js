import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

function NewDetail() {
  const navigation = useNavigation();
  const [lists, setList] = useState([
    {
      id: '1',
      icon: require('../assets/i3.png'),
      description: 'Tác dụng của Origami đối với con người',
      description2: '',
      author: 'Mic',
    },
    {
      id: '2',
      num: '2',
      name: 'Vũ Hán, Trung Hoa',
      icon: require('../assets/i1.png'),
      description: 'Tác dụng của Origami đối với toán học',
      description2: '',
      author: 'Joe',
    },
    {
      id: '3',
      num: '3',
      name: 'Nhân Xuyên, Nam Triều Tiên',
      icon: require('../assets/i2.png'),
      description: 'Cách gấp Origami Nhật Bản hình phòng thư',
      author: 'John',
    },
    {
      id: '4',
      icon: require('../assets/i4.png'),
      description: 'Gấp Origami hình trái tim',
      author: 'John',
    },
    {
      id: '5',
      icon: require('../assets/i5.png'),
      description: 'Gấp Origami hình bông hoa',
      author: 'John',
    },
  ]);

  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        scrollEnabled={false}
        data={lists}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Read')}>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: '10%',
                  marginVertical: '3%',
                }}
              >
                <View>
                  <Image source={item.icon} />
                </View>

                <View style={{ marginVertical: '5%', marginLeft: 10 }}>
                  <Text
                    style={{
                      fontWeight: '700',
                      width: 202,
                      height: 40,
                      fontSize: 16,
                      lineHeight: 19.5,
                    }}
                  >
                    {item.description}
                  </Text>
                  <Text style={{ fontWeight: '700' }}>{item.description2}</Text>
                  <Text style={{ fontWeight: '400', color: '#70747E' }}>
                    {item.author}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default NewDetail;
