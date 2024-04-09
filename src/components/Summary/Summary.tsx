import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

const Summary = ({input, list}: {input: string; list: Document[]}) => {
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
        <Text style={styles.emptypagetitle}>
          What thoughts do you want to recall?
        </Text>
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
  emptypagetitle: {
    color: '#7468F3',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
});

export default Summary;
