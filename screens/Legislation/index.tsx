import React from 'react';
import { View, Text, Button } from 'react-native';
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../StackNavigator';
import { styles } from '../../styles';

type LegislationRouteProp = RouteProp<RootStackParamList, 'Legislation'>;
type LegislationNavigationProp = NavigationProp<RootStackParamList, 'Legislation'>;

interface Props {
  route: LegislationRouteProp;
  navigation: LegislationNavigationProp;
}

const Legislation = ({ route, navigation }: Props) => {
  const { bill } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.primaryText}>{bill.title}</Text>
      <Button
        title="Submit"
        color={styles.secondaryText.color}
        onPress={() => navigation.navigate('BillStack', { name: 'Bills' })}
      />
    </View>
  );
};

export default Legislation;
