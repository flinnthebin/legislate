import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../StackNavigator';

type BillsNavProp = NavigationProp<RootStackParamList, 'Legislation'>;

interface Props {
  navigation: BillsNavProp;
}

const Categories = ({ navigation }: Props) => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.category}>
        <Text style={styles.categoryTitle} onPress={() => navigation.navigate('Legislation', { name: 'Legislation' })}>
        Aboriginal Land Grant (Jervis Bay Territory) Amendment (Strengthening Land and Governance Provisions) Bill 2022
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  categoryTitle: {
    fontSize: 18,
  },
});

export default Categories;
