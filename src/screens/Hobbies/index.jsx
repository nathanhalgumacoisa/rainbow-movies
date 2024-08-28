import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import MyButton from '../../components/MyButton';


export default function Hobbies() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Hobbies</Text>
      <MyButton screen={"Home"} name={"Back to home"} />
      <MyButton screen={"Filmes"} name={"Go to Filmes"} />
    </View>
  )
}