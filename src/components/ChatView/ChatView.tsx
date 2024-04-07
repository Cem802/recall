import {Text, FlatList, View} from 'react-native';
import React from 'react';
import {styles} from './ChatView.styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatView = ({
  messages,
}: {
  messages: {id: number; from: string; text: string}[];
}) => {
  return messages.length > 0 ? (
    <FlatList
      data={messages}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.messageContainer}>
          <View style={styles.fromcontainer}>
            <View style={styles.iconContainer}>
              <AntIcon name="user" size={20} color="#fff" />
            </View>
            <Text style={styles.from}>You</Text>
          </View>
          <Text style={styles.message}>{item.text}</Text>
        </View>
      )}
      style={styles.messageslist}
    />
  ) : (
    <View style={styles.emptyContainer}>
      <View style={styles.logo}>
        <MCIIcon name="star-four-points" size={25} color="#000" />
      </View>
    </View>
  );
};

export default ChatView;
