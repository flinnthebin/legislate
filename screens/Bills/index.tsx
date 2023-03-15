import React from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../StackNavigator';
import { styles } from '../../styles';
import billist from './bills.json';

type BillsNavProp = NavigationProp<RootStackParamList, 'Legislation'>;

interface Props {
  navigation: BillsNavProp;
}

const Bills = ({ navigation }: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {billist.map((section, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Legislation', { bill: section })
            }
          >
            <Text style={styles.primaryText}>{section.title}</Text>
          </TouchableOpacity>
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

export default Bills;
