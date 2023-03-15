import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../StackNavigator';

type CategoriesScreenNavigationProp = NavigationProp<RootStackParamList, 'Categories'>;

interface Props {
  navigation: CategoriesScreenNavigationProp;
}

const Categories = ({ navigation }: Props) => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.category}>
        <Text style={styles.categoryTitle} onPress={() => navigation.navigate('Legislation')}>
          Environment
        </Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle} onPress={() => navigation.navigate('Legislation')}>
          Immigration and Border Control
        </Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle} onPress={() => navigation.navigate('Legislation')}>
          Electoral and Political Reform
        </Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle} onPress={() => navigation.navigate('Legislation')}>
          Education
        </Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle} onPress={() => navigation.navigate('Legislation')}>
          Financial and Economic
        </Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle} onPress={() => navigation.navigate('Legislation')}>
          Health and Safety
        </Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle} onPress={() => navigation.navigate('Legislation')}>
          Indigenous Affairs
        </Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle} onPress={() => navigation.navigate('Legislation')}>
          Media and Broadcasting
        </Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle} onPress={() => navigation.navigate('Legislation')}>
          Criminal Justice
        </Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle} onPress={() => navigation.navigate('Legislation')}>
          Social Welfare
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
