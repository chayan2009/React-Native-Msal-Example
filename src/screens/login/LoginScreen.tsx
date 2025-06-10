import React from 'react';
import {Button, Text, View} from 'react-native';
import {loginStyles} from './style/LoginScreen.styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AuthService from '../../services/AuthService';
type LoginScreenProps = {
navigation: NativeStackNavigationProp<any>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
const onHandleEvent = async() => {
try {
    const result= await AuthService.login();
    if (result?.accessToken) {
    console.log('Login successful:', result);
    navigation.navigate('Home');
    }
} catch (error) {
    console.error('Login error:', error);

}
};
return (
    <View style={loginStyles.container}>
    <Text style={loginStyles.header}>Welcome</Text>
    <Button title="Login / Signup" onPress={() => onHandleEvent()} />
    </View>
);
};
export default LoginScreen;
