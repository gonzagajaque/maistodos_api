import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, StatusBar } from 'react-native';
import { CommonActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SegmentedControlTab from "react-native-segmented-control-tab";

function BalanceScreen() {

    const [balance, setBalance] = useState();
    const [transactions, setTransactions] = useState();
    const [ selectedIndex, setSelectedIndex ] = useState(0);

    const navigation = useNavigation();

    useEffect(() => {
        getBalance();
        getTransactions();
    }, []);

    async function getBalance() {
        try {
            const { data } = await api.get('/mock/balance');
            console.log(data);
            setBalance(data.saldo);
        } catch (error) {
            console.log(error);
        }
    }

    async function getTransactions() {
        try {
            const { data } = await api.get('/mock/transactions');
            console.log(data);
            setTransactions(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSingleIndexSelect = (index: any) => {
        setSelectedIndex(index);
      };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Icon
                    name="align-justify"
                    size={30} color="#fff"
                    onPress={() => navigation.dispatch(CommonActions.goBack())}
                />
                <Text style={styles.headerTitle}>
                    Carteira Digital
                </Text>
                <Icon name='bell' size={26} color='#fff' />
            </View>
            <View style={styles.section}>
            <Icon name="user-nurse" size={50} color='#98d41f' />
            <Icon name="map-marker" size={50} color='#98d41f' />
            </View>
            <View style={styles.cardBalance}>
                <Text style={styles.titleBalance}>Saldo Disponível</Text>
                <Text style={styles.balance}>R${balance}</Text>
                <Text style={styles.descriptionBalance}>
                    Esse é o valor total de cashback, depósitos, pagamentos e transferências recebidas.
                </Text>
            </View>
            <View>
            <SegmentedControlTab
          values={['Entrada', 'Saída']}
          selectedIndex={selectedIndex}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          onTabPress={handleSingleIndexSelect}
        />
            </View>
            <FlatList style={styles.list}
                data={transactions}
                renderItem={transaction => {
                    console.log(transaction)
                    const { item, index } = transaction;
                    return (
                        <View
                            key={index}
                        >
                            <View style={styles.cardTransaction}>
                                <Text style={styles.titleTransaction}>{item.cartaoMascarado}</Text>
                                <Text style={styles.dateTransaction}>{item.dataTransacao}</Text>
                                <Text style={styles.valueTransaction}>{item.descricao}</Text>
                            </View>
                        </View>
                    )
                }}
            >
            </FlatList>
        </View>
    );
}

function transacoes() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Transações</Text>
        </View>
    );
};

function cartoes() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Cartões</Text>
        </View>
    );
};

function pay() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Pagar</Text>
        </View>
    );
};

function perfil() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <Text>Perfil</Text>
        </View>
    );
};

const Tab = createBottomTabNavigator();

export default function tabs() {
    StatusBar.setBarStyle('light-content', true);
    return (
        //@ts-ignore
        <Tab.Navigator tabBarOptions = {{
            activeTintColor: '#584596',
            inactiveTintColor: '#fff',
        }}>
            <Tab.Screen name="Inicio" component={BalanceScreen} options={{
                tabBarIcon: () => (
                    <Icon name="home" size={30} color={'#fff'} />
                ),
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#98d41f',
                    borderTopColor: '#98d41f',
                    borderTopWidth: 0.5,
                }
            }}/>
            <Tab.Screen name="Transações" component={transacoes} options={{
                tabBarIcon: () => (
                    <Icon name="comments-dollar" size={30} color={'#fff'} />
                ),
                tabBarStyle: {
                    backgroundColor: '#98d41f',
                    borderTopColor: '#98d41f',
                    borderTopWidth: 0.5,
                }
            }} />
            <Tab.Screen name="Pagar" component={pay} options={{
                tabBarIcon: () => (
                    <Icon name="dollar-sign" size={30} color={'#fff'} />
                ),
                tabBarStyle: {
                    backgroundColor: '#98d41f',
                    borderTopColor: '#98d41f',
                    borderTopWidth: 0.5,
                }, 
            }} />
            <Tab.Screen name="Cartões" component={cartoes} options={{
                tabBarIcon: () => (
                    <Icon name="credit-card" size={30} color={'#fff'} />
                ),
                tabBarStyle: {
                    backgroundColor: '#98d41f',
                    borderTopColor: '#98d41f',
                    borderTopWidth: 0.5,
                }
            }} />
            <Tab.Screen name="Perfil" component={perfil} options={{
                tabBarIcon: () => (
                    <Icon name="user" size={30} color={'#fff'} />
                ),
                tabBarStyle: {
                    backgroundColor: '#98d41f',
                    borderTopColor: '#98d41f',
                    borderTopWidth: 0.5,
                }
            }} />
        </Tab.Navigator>
    );

}

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#98d41f',//'#584596',
        paddingHorizontal: 10,
        borderBottomColor: '#dfe4fe',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    section: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginTop: 10,
    },
    cardBalance: {
        flex: 0.5,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleBalance: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    balance: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    descriptionBalance: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    cardTransaction: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    titleTransaction: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    dateTransaction: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    valueTransaction: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    list: {
        flex: 1,
    },
    tabStyle: {
        backgroundColor: '#98d41f',
        marginHorizontal: 10,
        borderTopColor: '#98d41f',
        borderTopWidth: 0.5,
        borderRadius: 4,
        paddingBottom: 10,
    },
    activeTabStyle: {
        backgroundColor: '#584596',
    },
});