import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export function useStyles() {

    const styles = useMemo(() => {

        return StyleSheet.create({
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
                paddingHorizontal: 25,
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
                fontWeight: 'bold',
            },
            cardTransaction: {
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                backgroundColor: '#fff',
                borderRadius: 10,
                margin: 8,
                padding: 10,
            },
            titleTransaction: {
                fontSize: 14,
                fontWeight: 'bold'
            },
            dateTransaction: {
                fontSize: 14,
                fontWeight: 'bold'
            },
            valueTransaction: {
                fontSize: 20,
                fontWeight: 'bold',
                color: '#584596',
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
                margin: 5,
            },
            activeTabStyle: {
                backgroundColor: '#584596',
            },
            pagesNotImplementeds: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabContent: {
                color: '#000',
                fontSize: 18,
                margin: 24,
            },
            headerTotal: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                alignSelf: 'stretch',
            },
            headerTotalTitle: {
                fontSize: 18,
                fontWeight: 'bold',
                color: '#584596',
            },
            saldo: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 6,
            }
        });
    }, []);
    return styles;
}
