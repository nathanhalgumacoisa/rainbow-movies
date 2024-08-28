import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import MyButton from '../../components/MyButton';
import Title from '../../components/Title';
import { useState } from 'react';

export default function Filmes() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     <Title title={"Filmes"} />
      <MyButton screen={"Hobbies"} name={"Go to Hobbies"} />
      <MyButton screen={"Home"} name={"Back to home"} />

      
    </View>
  )
}