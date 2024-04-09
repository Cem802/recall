import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './ChatInput.styles';
import Icon from 'react-native-vector-icons/AntDesign';

const ChatInput = ({
  placeholder,
  onSendMessage,
  buttonDown,
}: {
  placeholder: string;
  onSendMessage: (message: string) => void;
  buttonDown?: boolean;
}) => {
  const [height, setHeight] = useState(0);
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#787A91"
        style={[styles.input, {height: Math.max(40, height)}]}
        multiline={true}
        onContentSizeChange={event => {
          if (event.nativeEvent.contentSize.height < 501) {
            setHeight(event.nativeEvent.contentSize.height);
          } else {
            setHeight(500);
          }
        }}
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onSendMessage(input);
          setInput('');
        }}>
        <Icon
          name={buttonDown ? 'arrowdown' : 'arrowup'}
          size={20}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
