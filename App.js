import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoContainer from './src/container/ToDoContainer';
import {Provider} from 'react-redux';
import store from'./src/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store ={store}>
      <View style={styles.container}>
            <ToDoContainer/>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
