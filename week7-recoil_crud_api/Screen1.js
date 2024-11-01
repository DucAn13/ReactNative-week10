import { Text, View, Pressable, Image,SafeAreaView, FlatList, TextInput, ScrollView} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function Screen1({navigation}){
  return(
    <SafeAreaView
      style={{
        alignItems:'center',
        width:389,
        height:700,
        justifyContent:'space-around',
        backgroundColor:'white'
      }}
    >
      <View
        style={{
          height:271,
          width:271
        }}
      >
      </View>
      <Text
        style={{
          color:'#8353E2',
          fontSize:24,
          fontWeight:700,
          width:200,
          textAlign:'center'
        }}
      >
        MANAGE YOUR TASK
      </Text>
      <View
        style={{
          position:'relative',
          justifyContent:'center'
        }}
      >
        <TextInput
          style={{
            width:334,
            height:43,
            borderColor:'#9095A0',
            borderWidth:1,
            borderRadius:10,
            paddingStart:50
          }}
          placeholder='Enter your name'
          placeholderTextColor='#9095A0'
        />
        <AntDesign name="mail" size={29} color="#9095A0" style={{position:'absolute',left:15}}/>
      </View>
      <Pressable
        style={{
          backgroundColor:'#00BDD6',
          height:44,
          width:190,
          borderRadius:10,
          justifyContent:'center',
          alignItems:'center'
        }}
        onPress={()=>{
          navigation.navigate('Screen2')
        }}
      >
        <Text
          style={{
            color:'white'
          }}
        >
          GET STARTED -{'>'}
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}
export default Screen1;