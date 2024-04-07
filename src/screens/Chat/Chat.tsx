import React, {useState} from 'react';
import {View} from 'react-native';
import ChatView from '../../components/ChatView/ChatView';
import ChatInput from '../../components/ChatInput/ChatInput';

const Chat = () => {
  const [messages, setMessages] = useState<
    Array<{id: number; from: string; text: string}>
  >([]);

  const handleSendMessage = (message: string) => {
    setMessages(prevMessages => [
      ...prevMessages,
      {id: Math.random(), from: 'user', text: message},
    ]);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <ChatView messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </View>
  );
};

export default Chat;
