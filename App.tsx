import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'red'}}>
      <Text style={styles.text}>Hello maisTodos</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    marginVertical: 10,
    marginHorizontal: 10,
    textAlign: 'center',
    backgroundColor: '#584596',
    color:'#00df9f',
    fontFamily: 'Montserrat-Regular',

  },
});

//    color: #575756;
//    background: #d9d9d9;
//     background: #f87d00;
//     background: #3839f3;


export default App;