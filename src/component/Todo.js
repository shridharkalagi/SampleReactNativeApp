import React from 'react';
import { Text,FlatList,View, StyleSheet } from 'react-native'

export default class Todo extends React.Component {
    render() {
        const styles = StyleSheet.create({
   text: {
       backgroundColor: '#666',
       flex: 1,
       padding: 10,
       width: 320,
       color: '#fff',
       marginBottom: 10

   }
});


   const { todos } = this.props;
   return(<View>
       <FlatList style={{flex:1}} data={ todos } renderItem={
           ({item}) => <Text style ={styles.text}> { item }</Text>
       }
       />
   </View>)
}

}
