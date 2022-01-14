import { useMemo } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export function useStyles() {

    const styles = useMemo(() => {

        return StyleSheet.create({
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
    }, []);
    return styles;
}
