import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from './style/HomeScreen.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<any>;
};

const HomeScreen : React.FC<HomeScreenProps>  = ({ navigation }) => {
return (
    <View style={styles.container}>
    <Text style={styles.header}>Welcome to the Home Screen!</Text>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
);
};

export default HomeScreen;
