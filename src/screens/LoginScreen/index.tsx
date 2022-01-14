import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import api from '../../services/api';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { useStyles } from "./style";

function LoginScreen() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigation = useNavigation();
    const styles = useStyles();

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
                        { name: 'Balance' },
                    ],
                })
            );

        } catch (err) {
            setError('CPF ou senha inválidos');
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
                        <TextInputMask
                            type={'cpf'}
                            style={styles.input}
                            placeholder='Digite seu CPF'
                            value={username}
                            onChangeText={handleUsernameChange}
                            autoCapitalize={'none'}
                            keyboardType={'number-pad'}
                            textContentType='username'
                            autoComplete='username'
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

export default LoginScreen;