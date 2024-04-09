import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View} from 'react-native';
import ChatView from '../../components/ChatView/ChatView';
import ChatInput from '../../components/ChatInput/ChatInput';
import Icon from 'react-native-vector-icons/AntDesign';

const Chat = ({navigation}: {navigation: any}) => {
  const [messages, setMessages] = useState<Document[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon name="delete" size={20} color="#fff" onPress={() => {}} />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    fetch('http://localhost:8000/api/documents', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(results => setMessages(results));
  }, []);

  const handleSendMessage = async (message: string) => {
    if (message.trim() === '') {
      return;
    }

    await fetch('http://localhost:8000/api/documents/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: '1',
        content: message,
      }),
    });
    const result = await fetch('http://localhost:8000/api/documents', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json());
    setMessages(result);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <ChatView messages={messages} />
      <ChatInput
        placeholder="Write down your thoughts..."
        onSendMessage={handleSendMessage}
      />
    </View>
  );
};

export default Chat;
