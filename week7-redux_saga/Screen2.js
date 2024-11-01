
import { Text, View, Pressable, Image, SafeAreaView, FlatList, TextInput, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Task from './Task';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosRequest, deleteTodoRequest } from './actions';


function Screen2({ navigation }) {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodoRequest(id));
  };
  
  return (
    <SafeAreaView
      style={{
        width: 389,
        height: 700,
        backgroundColor: 'white',
        justifyContent: 'space-around'
      }}
    >
      <View id='header'
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          backgroundColor: 'white'
        }}
      >
        <Pressable
          onPress={() => navigation.navigate('Home')}
        >
          <AntDesign name="arrowleft" size={36} color="black" />
        </Pressable>
        <View
          style={{
            flexDirection: 'row'
          }}
        >
          <Pressable
            style={{
              borderWidth: 1,
              borderRadius: 100,
              height: 50,
              width: 50,
              marginEnd: 10
            }}
          >
          </Pressable>
          <View>
            <Text
              style={{
                color: '#171A1F',
                flexShrink: 20,
                fontWeight: 700,
                paddingStart: 10
              }}
            >
              Hi Twinkle
            </Text>
            <Text
              style={{
                color: 'gray',
                flexShrink: 14,
                fontWeight: 700
              }}
            >
              Have a great day ahead
            </Text>
          </View>
        </View>
      </View>
      <View id='body'
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          height: 450
        }}
      >
        <View
          style={{
            position: 'relative',
            justifyContent: 'center',
            marginBottom: 5
          }}
        >
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              width: 334,
              height: 44,
              borderRadius: 5,
              paddingStart: 40
            }}
            placeholder='Search'
          />
          <AntDesign name="search1" size={26} color="black" style={{ position: 'absolute', left: 10 }} />
        </View>
        <ScrollView
          style={{
            height: 300
          }}
        >
          <FlatList
            data={taskList}
            renderItem={({ item }) => <Task item={item} navigation={navigation} />}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
      <View id='footer'
        style={{
          alignItems: 'center',
        }}
      >
        <Pressable
          style={{
            height: 69,
            width: 69,
            backgroundColor: '#00BDD6',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => {
            navigation.navigate('Screen3')
          }}
        >
          <FontAwesome6 name="add" size={35} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
export default Screen2;
