import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../StackNavigator';
import { styles } from '../../styles';

type LoginScreenNavigationProp = NavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const CLIENT_ID = 'your-client-id-goes-here';


const Login = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.primaryText}>Login with Google</Text>
      <View style={{ backgroundColor: '#282828', borderRadius: 5 }}>
        <Button
          title="Login"
          color={styles.secondaryText.color}
          onPress={() => navigation.navigate('Bills', { name: 'Bills' })}
        />
      </View>
    </View>
  );
};

export default Login;
