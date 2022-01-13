import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome5';

function BalanceScreen() {

    const [error, setError] = useState('');

    const navigation = useNavigation();

    useLayoutEffect(() => {
        getBalance();
    }, []);

    useEffect(() => {
        getTransactions();
    }
    , []);

    async function getBalance() {
        try {
            let responseJson = await api.get('/mock/balance');
            console.log(responseJson);
            return responseJson;
        } catch (error) {
            console.log(error);
        }
    }

    async function getTransactions() {
        try {
            let responseJson = await api.get('/mock/transactions');
            console.log(responseJson);
            return responseJson;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Saldo</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>R$ 0,00</Text>
                <Icon name="arrow-left" size={30} color="#000" onPress={() => navigation.dispatch(CommonActions.goBack())} />
            </View>
        </View>
    );
}

export default BalanceScreen;