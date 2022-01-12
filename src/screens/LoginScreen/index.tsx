import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
} from 'react-native';
import api from '../../services/api';
import { useNavigation, CommonActions } from '@react-navigation/native';

function LoginScreen() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigation = useNavigation();

    async function handleSubmit() {
        try {
            const { data } = await api.post('/mock/login', {
                username,
                password,
            });
            console.log(data);

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Home' },
                    ],
                })
            );

        } catch (err) {
            setError('Usuário ou senha inválidos');
            console.log(err);
        }
    }


    const handleUsernameChange = (username: string) => {
        setUsername(username);
    }

    const handlePasswordChange = (password: string) => {
        setPassword(password);
    }



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.bigCircle}></View>
                <View style={styles.smallCircle}></View>
                <View style={styles.centerizedView}></View>
                <View style={styles.authBox}>
                    <View style={styles.inputBox}>
                        <Text>Usuário</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite seu usuário'
                            value={username}
                            onChangeText={handleUsernameChange}
                            autoCapitalize={'none'}
                            keyboardType={'default'}
                            textContentType='username'
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite sua senha'
                            value={password}
                            onChangeText={handlePasswordChange}
                            autoCapitalize={'none'}
                            secureTextEntry={true}
                            textContentType='password'
                        />
                        {error.length > 0 ? <Text style={styles.error}>Digite um usuario ou senha valida</Text> : null}
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        paddingVertical: '50%',
        backgroundColor: '#584596'
    },
    bigCircle: {
        position: 'absolute',
        top: -90,
        width: Dimensions.get('window').height * 0.7,
        height: Dimensions.get('window').height * 0.7,
        borderRadius: 1000,
        backgroundColor: '#98d41f',
        right: Dimensions.get('window').width * 0.25,
    },
    smallCircle: {
        position: 'absolute',
        top: 550,
        width: Dimensions.get('window').height * 0.4,
        height: Dimensions.get('window').height * 0.4,
        borderRadius: 1000,
        backgroundColor: '#98d41f',
        right: Dimensions.get('window').width * -0.3,
        bottom: Dimensions.get('window').width * -0.2,
    },
    centerizedView: {
        width: '100%',
        top: '15%',
    },
    authBox: {
        width: '80%',
        backgroundColor: '#fafafa',
        borderRadius: 20,
        alignSelf: 'center',
        paddingHorizontal: 14,
        paddingBottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputBox: {
        marginTop: 10
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: '#dfe4ea',
        borderRadius: 1,
        paddingHorizontal: 10,
    },
    loginButton: {
        backgroundColor: '#98d41f',
        paddingVertical: 10,
        borderRadius: 4,
        marginTop: 10,
    },
    loginButtonText: {
        color: '#fafafa',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
});

export default LoginScreen;