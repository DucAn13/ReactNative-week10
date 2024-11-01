import { Text, View, Pressable, Image,SafeAreaView, FlatList, TextInput, ScrollView} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Task=({item,navigation})=>{
  return(
    <View
      style={{
        width:335,
        minHeight:44,
        borderRadius:30,
        backgroundColor:'#DEE1E678',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:10,
        marginBottom:5
      }}
    >
      <View
        style={{
          flexDirection:'row',
           alignItems:'center'
        }}
      >
        <AntDesign name="checksquareo" size={24} color="#14923E"/>
        <Text
          style={{
            marginStart:10,
            fontSize:16,
            fontWeight:700,
            width:200
          }}
        >
          {item.name}
        </Text>
      </View>
      <View
        style={{
          flexDirection:'row'
        }}
      >
        <Pressable
          onPress={()=>{
              navigation.navigate({
                name:'Screen3',
                params: {editTask: item},
                merge:true
              })
          }}
        >
          <AntDesign name="edit" size={24} color="red" />
        </Pressable>
        <Pressable
          style={{
            marginStart:20
          }}
          onPress={()=>{
            fetch(`https://66ff425c2b9aac9c997eb603.mockapi.io/Task/${item.id}`,
            {
              method:'DELETE'
            })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(() => {
              navigation.replace('Screen2');
            })
            .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
            });
          }}
        >
          <AntDesign name="delete" size={24} color="red" />
        </Pressable>
        
      </View>
    </View>
  )
}
export default Task;