import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StatusBar, ScrollView, Alert } from 'react-native';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { useStyles } from "./style";
import LinearGradient from 'react-native-linear-gradient';

function BalanceScreen() {

    const [balance, setBalance] = useState();
    const [transactions, setTransactions] = useState();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const styles = useStyles();

    useEffect(() => {
        getBalance();
        getTransactions();
    }, []);

    const notImplemented = () => {
        Alert.alert('Ainda não implementado'
            , 'Funcionalidade implementada apenas para fim de visualização.');
    }

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
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Icon
                    name="align-justify"
                    size={30} color="#fff"
                    onPress={notImplemented}
                />
                <Text style={styles.headerTitle}>
                    Carteira Digital
                </Text>
                <Icon name='bell'
                    size={26}
                    color='#fff'
                    onPress={notImplemented}
                />

            </View>
            <View style={styles.section}>
                <Icon
                    name="user-nurse"
                    size={30}
                    color='#584596'
                    onPress={notImplemented}
                />
                <Icon
                    name="map-marker-alt"
                    size={30}
                    color='#584596'
                    onPress={notImplemented}
                />
            </View>
            <View style={styles.cardBalance}>
                <Text style={styles.titleBalance}>Saldo Disponível</Text>
                <View style={styles.saldo}>
                    <Text style={styles.balance}>R${balance}</Text>
                    <Icon
                    name='eye'
                    style={{ marginLeft: 10 }}
                    size={25}
                    color='#584596'
                    onPress={notImplemented}
                    />
                </View>
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
                            <ScrollView>
                                <View style={styles.cardTransaction}>
                                    <View style={styles.headerTotal}>
                                        <Text style={styles.dateTransaction}>
                                            {item.dataTransacao}
                                        </Text>
                                        <Icon
                                            name='info'
                                            size={15}
                                            color='#584596'
                                            onPress={notImplemented}
                                        />
                                    </View>

                                    <Text style={styles.valueTransaction}>
                                        {item.tipoTransacao}
                                    </Text>
                                    {/* <Text style={styles.titleTransaction}>
                                        {item.cartaoMascarado}
                                    </Text> */}
                                    <Text style={styles.titleTransaction}>
                                        {item.descricao}
                                    </Text>
                                    <Text style={styles.titleTransaction}>
                                        Cartão final: {item.finalCartao}
                                    </Text>
                                    <Text style={styles.titleTransaction}>
                                        {item.nomePortador}
                                    </Text>
                                    {/* <Text style={styles.titleTransaction}>
                                        {item.tipoLancamento}
                                    </Text> */}
                                    <View style={styles.headerTotal}>
                                        <Text style={styles.headerTotalTitle}>Total</Text>
                                        <Text style={styles.headerTotalTitle}>R${item.valorTransacao}</Text>
                                    </View>

                                </View>
                            </ScrollView>

                        </View>
                    )
                }}
            >
            </FlatList>
        </View>
    );
}

function transacoes() {
    const styles = useStyles();
    return (
        <View style={styles.pagesNotImplementeds}>
            <Text>Transações</Text>
        </View>
    );
};

function cartoes() {
    const styles = useStyles();
    return (
        <View style={styles.pagesNotImplementeds}>
            <Text>Cartões</Text>
        </View>
    );
};

function pay() {
    const styles = useStyles();
    return (
        <View style={styles.pagesNotImplementeds}>
            <Text>Pagar</Text>
        </View>
    );
};

function perfil() {
    const styles = useStyles();
    return (
        <View style={styles.pagesNotImplementeds}>
            <Text>Perfil</Text>
        </View>
    );
};

const Tab = createBottomTabNavigator();

export default function tabs() {
    StatusBar.setBarStyle('light-content', true);
    return (
        //@ts-ignore
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#584596',
            inactiveTintColor: '#fff',
        }}>
            <Tab.Screen name="Início" component={BalanceScreen} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home" size={30} color={color} />
                ),
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#98d41f',
                    borderTopColor: '#98d41f',
                    borderTopWidth: 0.5,
                }
            }} />
            <Tab.Screen name="Transações" component={transacoes} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="comments-dollar" size={30} color={color} />
                ),
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#98d41f',
                    borderTopColor: '#98d41f',
                    borderTopWidth: 0.5,
                }
            }} />
            <Tab.Screen name="Pagar" component={pay} options={{
                tabBarIcon: () => (
                    <LinearGradient style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        marginBottom: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        elevation: 6,
                        shadowColor: '#98d41f',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                    }}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        colors={['#584596', '#312553']
                        }>
                        <Icon name="dollar-sign" size={26} color={'#98d41f'} />
                    </LinearGradient>
                ),
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#98d41f',
                    borderTopColor: '#98d41f',
                    borderTopWidth: 0.5,
                },
            }} />
            <Tab.Screen name="Cartões" component={cartoes} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="credit-card" size={30} color={color} />
                ),
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#98d41f',
                    borderTopColor: '#98d41f',
                    borderTopWidth: 0.5,
                }
            }} />
            <Tab.Screen name="Perfil" component={perfil} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="user" size={30} color={color} />
                ),
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#98d41f',
                    borderTopColor: '#98d41f',
                    borderTopWidth: 0.5,
                }
            }} />
        </Tab.Navigator>
    );
}