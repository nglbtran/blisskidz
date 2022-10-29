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
} from 'react-native';
import { Button, Searchbar, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-virtualized-view';
import NewDetail from '../components/NewDetail';

const News = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
              width: '90%',
              height: '90%',
              backgroundColor: 'white',
              marginHorizontal: '5%',
              marginTop: 20,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                marginTop: 29,
                alignSelf: 'center',
              }}
            >
              Văn Hóa Origame
            </Text>
            <NewDetail />
          </View>
        </View>
        <View style={{ marginTop: '15%', justifyContent: 'center' }}>
          <Image
            source={require('../assets/hoatiet.png')}
            style={{ alignItems: 'center', width: '110%' }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ade2e6',
    height: '100%',
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

export default News;
