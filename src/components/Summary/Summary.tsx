import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

const Summary = ({
  input,
  list,
}: {
  input: string;
  list: {id: Number; user_id: number; content: string; topic_number: number}[];
}) => {
  return (
    <View style={styles.container}>
      {list.length > 0 ? (
        <>
          <Text style={styles.title}>Found thoughts related to:</Text>
          <Text style={styles.title}>"{input}"</Text>
          <FlatList
            data={list}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View>
                <Text style={styles.content}>- {item.content}</Text>
              </View>
            )}
          />
        </>
      ) : (
        <Text style={styles.title}>What thoughts do you want to recall?</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  content: {
    color: '#fff',
    fontSize: 16,
    margin: 10,
  },
});

export default Summary;
