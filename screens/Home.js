import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  TouchableHighlight,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { category } from '../components/data';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const Home = () => {
  const [numListPic, setNumListPic] = useState(0)
  const [numList, setNumList] = useState(0)
  const [numObj, setNumObj] = useState(0)
  const [doneScreen, setDoneScreen] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [x, setX] = useState(false)
  const objHidden = 'diplay: none'
  const objVisible = 'display: true'

  const nextPic = () => {
    if (numListPic < category[numObj].list[numList].pic.length - 1) {
      setNumListPic(numListPic + 1)
    } else {
      setDoneScreen(true)
    }
  }

  const reset = () => {
    setNumListPic(0)
    setDoneScreen(false)
  }

  const origamiList = () => {
    return (
      <View>
        <View>
          <TouchableOpacity
          onPress={()=>{setNumList(0); setDoneScreen(2); setNumListPic(0)}}
          >
            <View
            style={{
              borderRadius: 20,
              height: vw(36),
              width: vw(40),
              backgroundColor: 'white',
              alignSelf: 'center',
              top: vw(-10),
              borderColor: '#FFAC30',
              borderWidth: 4,
              position: 'relative',
            }}>
              <Text style={{alignSelf: 'center', fontSize: 22, fontWeight: 'bold', color: 'black', top: vw(4), position: 'absolute', zIndex: 1}}>
                {category[numObj].list[0].listTitle}</Text>
              <Image source={category[numObj].list[0].pic[category[numObj].list[0].pic.length-1]}
              style={{width: '100%', height: '100%', marginTop: vw(4)}}
              resizeMethod='resize'
              resizeMode='contain'
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: vw(3) ,width: vw(90), flexDirection:'row', alignSelf: 'center', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
          onPress={()=>{setNumList(1); setDoneScreen(2); setNumListPic(0)}}
          >
            <View
            style={{
              borderRadius: 20,
              height: vw(36),
              width: vw(40),
              backgroundColor: 'white',
              alignSelf: 'center',
              top: vw(-10),
              borderColor: '#FFAC30',
              borderWidth: 4,
              position: 'relative',
            }}>
              <Text style={{alignSelf: 'center', fontSize: 22, fontWeight: 'bold', color: 'black', top: vw(4), position: 'absolute', zIndex: 1}}>
                {category[numObj].list[1].listTitle}</Text>
              <Image source={category[numObj].list[1].pic[category[numObj].list[1].pic.length-1]}
              style={{width: '100%', height: '100%', marginTop: vw(4)}}
              resizeMethod='resize'
              resizeMode='contain'
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{setNumList(2); setDoneScreen(2); setNumListPic(0)}}
          >
            <View
            style={{
              borderRadius: 20,
              height: vw(36),
              width: vw(40),
              backgroundColor: 'white',
              alignSelf: 'center',
              top: vw(-10),
              borderColor: '#FFAC30',
              borderWidth: 4,
              position: 'relative',
            }}>
              <Text style={{alignSelf: 'center', fontSize: 22, fontWeight: 'bold', color: 'black', top: vw(4), position: 'absolute', zIndex: 1}}>
                {category[numObj].list[2].listTitle}</Text>
              <Image source={category[numObj].list[2].pic[category[numObj].list[2].pic.length-1]}
              style={{width: '100%', height: '100%', marginTop: vw(4)}}
              resizeMethod='resize'
              resizeMode='contain'
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: vw(3) ,width: vw(90), flexDirection:'row', alignSelf: 'center', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
          onPress={()=>{setNumList(3); setDoneScreen(2); setNumListPic(0)}}
          >
            <View
            style={{
              borderRadius: 20,
              height: vw(36),
              width: vw(40),
              backgroundColor: 'white',
              alignSelf: 'center',
              top: vw(-10),
              borderColor: '#FFAC30',
              borderWidth: 4,
              position: 'relative',
            }}>
              <Text style={{alignSelf: 'center', fontSize: 22, fontWeight: 'bold', color: 'black', top: vw(4), position: 'absolute', zIndex: 1}}>
                {category[numObj].list[3].listTitle}</Text>
              <Image source={category[numObj].list[3].pic[category[numObj].list[3].pic.length-1]}
              style={{width: '100%', height: '100%', marginTop: vw(4)}}
              resizeMethod='resize'
              resizeMode='contain'
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{setNumList(4); setDoneScreen(2); setNumListPic(0)}}
          >
            <View
            style={{
              borderRadius: 20,
              height: vw(36),
              width: vw(40),
              backgroundColor: 'white',
              alignSelf: 'center',
              top: vw(-10),
              borderColor: '#FFAC30',
              borderWidth: 4,
              position: 'relative',
            }}>
              <Text style={{alignSelf: 'center', fontSize: 22, fontWeight: 'bold', color: 'black', top: vw(4), position: 'absolute', zIndex: 1}}>
                {category[numObj].list[4].listTitle}</Text>
              <Image source={category[numObj].list[4].pic[category[numObj].list[4].pic.length-1]}
              style={{width: '100%', height: '100%', marginTop: vw(4)}}
              resizeMethod='resize'
              resizeMode='contain'
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{height: vw(60), width: vw(100)}}>
        </View>
      </View>
    )
  }

  const origamiPic = () => {
    return (
      <View>
        <TouchableOpacity
        style={{
          alignSelf: 'center',
          height: vw(120),
            width: vw(86),
        }}
        onPress={nextPic}
        >
          <View
          style={{
            position: 'absolute',
            borderRadius: 20,
            height: vw(120),
            width: vw(86),
            backgroundColor: 'white',
            alignSelf: 'center',
            justifyContent: 'center',
            top: vw(-10),
          }}>
            <Text style={{alignSelf: 'center', fontSize: 22, fontWeight: 'bold', color: '#FFAC30', top: vw(10), position: 'absolute', zIndex: 1}}>
              {category[numObj].list[numList].listTitle}: {numListPic + 1}/{category[numObj].list[numList].pic.length}</Text>
            <Image source={category[numObj].list[numList].pic[numListPic]}
            style={{width: '100%', width: '100%'}}
            resizeMethod='resize'
            resizeMode='contain'
            />
          </View>
        </TouchableOpacity>
        

        <View
          style={{height: vw(60), width: vw(100)}}>
        </View>
      </View>
    )
  }
  const showBackToHome = () => {
    return (
      <View>

      </View>
    )
  }
  const origamiHome = () => {
    return (
      <View>
        <View style={{marginTop: 30}}>
          <TouchableHighlight
            onPress={() => {setNumObj(0); setDoneScreen(1)}}
            underlayColor={'#FFFFFF'}
          >
            <View style={{ justifyContent: 'center' ,alignSelf: 'center', flexDirection: 'row', height: vw(14) }}>
              <View
                style={styles.buttonObj}
              >
                <View
                  style={{
                    marginVertical: '2%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: '700', fontSize: 25 }}>
                    {category[0].objTitle}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '15%',
                  height: '100%',
                  backgroundColor: 'white',
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={category[0].objIcon}
                  style={{width: '75%', height: '75%'}}
                  resizeMode= 'contain'
                />
              </View>
            </View>
          </TouchableHighlight>
          </View>

          <View style={{marginTop: 30}}>
          <TouchableHighlight
            onPress={() => {setNumObj(1); setDoneScreen(1)}}
            underlayColor={'#FFFFFF'}
          >
            <View style={{ justifyContent: 'center' ,alignSelf: 'center', flexDirection: 'row', height: vw(14) }}>
              <View
                style={styles.buttonObj}
              >
                <View
                  style={{
                    marginVertical: '2%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: '700', fontSize: 25 }}>
                    {category[1].objTitle}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '15%',
                  height: '100%',
                  backgroundColor: 'white',
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  source={category[1].objIcon}
                  style={{width: '80%', height: '80%'}}
                  resizeMode= 'contain'
                />
              </View>
            </View>
          </TouchableHighlight>
          </View>

          <View style={{marginTop: 30}}>
          <TouchableHighlight
            onPress={() => {setNumObj(2); setDoneScreen(1)}}
            underlayColor={'#FFFFFF'}
          >
            <View style={{ justifyContent: 'center' ,alignSelf: 'center', flexDirection: 'row', height: vw(14) }}>
              <View
                style={styles.buttonObj}
              >
                <View
                  style={{
                    marginVertical: '2%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: '700', fontSize: 25 }}>
                    {category[2].objTitle}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '15%',
                  height: '100%',
                  backgroundColor: 'white',
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  source={category[2].objIcon}
                  style={{width: '80%', height: '80%'}}
                  resizeMode= 'contain'
                />
              </View>
            </View>
          </TouchableHighlight>
          </View>

          <View style={{marginTop: 30}}>
          <TouchableHighlight
            onPress={() => {setNumObj(3); setDoneScreen(1)}}
            underlayColor={'#FFFFFF'}
          >
            <View style={{ justifyContent: 'center' ,alignSelf: 'center', flexDirection: 'row', height: vw(14) }}>
              <View
                style={styles.buttonObj}
              >
                <View
                  style={{
                    marginVertical: '2%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: '700', fontSize: 25 }}>
                    {category[3].objTitle}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '15%',
                  height: '100%',
                  backgroundColor: 'white',
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  source={category[3].objIcon}
                  style={{width: '80%', height: '80%'}}
                  resizeMode= 'contain'
                />
              </View>
            </View>
          </TouchableHighlight>
          </View>

          <View style={{marginTop: 30}}>
          <TouchableHighlight
            onPress={() => {setNumObj(4); setDoneScreen(1)}}
            underlayColor={'#FFFFFF'}
          >
            <View style={{ justifyContent: 'center' ,alignSelf: 'center', flexDirection: 'row', height: vw(14) }}>
              <View
                style={styles.buttonObj}
              >
                <View
                  style={{
                    marginVertical: '2%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: '700', fontSize: 25 }}>
                    {category[4].objTitle}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '15%',
                  height: '100%',
                  backgroundColor: 'white',
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  source={category[4].objIcon}
                  style={{width: '80%', height: '80%'}}
                  resizeMode= 'contain'
                />
              </View>
            </View>
          </TouchableHighlight>
          </View>

      </View>
    )
  }
 
  const showWhat = () => {
    if (doneScreen==0) {
      return (origamiHome());
    } else if (doneScreen==1) {
      return (origamiList())
    } else if (doneScreen==2) {
      return (origamiPic())
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View>
          <Image
            style={{width: vw(100) , height: vw(40), marginLeft: 0 }}
            source={require('../assets/cloud.png')}
          />
        </View>

        <View style={{height: vw(100)}}>
          {showWhat()}

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
};

const styles = StyleSheet.create({
  buttonObj: {
    width: '65%',
    justifyContent: 'center',
    backgroundColor: '#FFAC30',
    borderWidth: 1,
    borderColor: '#FFAC30',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: vw(2),
  },
  container: {
    flex: 1,
    backgroundColor: '#ade2e6',

  },
  background: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ade2e6',
  },

  imageStyle: {
    width: 300,
    height: 300,
  },
});

export default Home;
