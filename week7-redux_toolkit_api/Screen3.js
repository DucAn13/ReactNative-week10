import { Text, View, Pressable, SafeAreaView, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './taskSlice'; // Import addTask từ taskSlice
import { updateTask } from './taskSlice'; // Import updateTask từ taskSlice

function Screen3({ route, navigation }) {
  const dispatch = useDispatch();
  const [currentTask, setCurrentTask] = useState({ name: '' });

  // Nếu có task để chỉnh sửa, khởi tạo currentTask
  useEffect(() => {
    if (route.params?.editTask) {
      setCurrentTask(route.params.editTask);
    }
  }, [route.params?.editTask]);

  const handleFinish = () => {
    if (currentTask.name.trim() !== '') {
      if (route.params?.editTask) {
        // Nếu đang chỉnh sửa, gọi action updateTask
        dispatch(updateTask(currentTask));
      } else {
        // Nếu thêm mới, gọi action addTask
        dispatch(addTask(currentTask));
      }
      navigation.replace('Screen2');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        width: 389,
        height: 700,
      }}
    >
      <View
        id='header'
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          backgroundColor: 'white',
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
          }}
        >
          <Pressable
            style={{
              borderWidth: 1,
              borderRadius: 100,
              height: 50,
              width: 50,
              marginEnd: 10,
            }}
          >
          </Pressable>
          <View>
            <Text
              style={{
                color: '#171A1F',
                flexShrink: 20,
                fontWeight: '700',
                paddingStart: 10,
              }}
            >
              Hi Twinkle
            </Text>
            <Text
              style={{
                color: 'gray',
                flexShrink: 14,
                fontWeight: '700',
              }}
            >
              Have a great day ahead
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => navigation.replace('Screen2')}
        >
          <AntDesign name="arrowleft" size={36} color="black" />
        </Pressable>
      </View>
      <View
        id='bodyScreen3'
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: '700',
            marginBottom: 40,
          }}
        >
          ADD YOUR JOB
        </Text>
        <View
          style={{
            position: 'relative',
            justifyContent: 'center',
          }}
        >
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              height: 44,
              width: 334,
              borderRadius: 5,
              paddingStart: 50,
            }}
            placeholder='Input your job'
            value={currentTask.name}
            onChangeText={(newTaskName) => {
              setCurrentTask({ ...currentTask, name: newTaskName });
            }}
          />
          <FontAwesome name="list-alt" size={24} color="green" style={{ position: 'absolute', left: 10 }} />
        </View>
        <Pressable
          style={{
            width: 190,
            height: 44,
            borderRadius: 5,
            backgroundColor: '#00BDD6',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 70,
            marginBottom: 120,
          }}
          onPress={handleFinish}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: 20,
            }}
          >
            FINISH -{'>'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Screen3;
