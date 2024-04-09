import {View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import ChatInput from '../../components/ChatInput/ChatInput';
import Summary from '../../components/Summary/Summary';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Recall = ({navigation}: {navigation: any}) => {
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');
  const [docs, setDocs] = useState<
    {id: Number; user_id: number; content: string; topic_number: number}[]
  >([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="restart"
          size={25}
          color="#fff"
          onPress={() => {
            setDocs([]);
            setSearch('');
          }}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const handleLogic = async () => {
      if (search.trim() === '') {
        return;
      }

      if (docs.length > 0) {
        if (input.trim() === '') {
          return;
        }
        await addThought(input);
      }
      await getDocs(search);
    };

    handleLogic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, input]);

  const addThought = async (message: string) => {
    fetch('http://localhost:8000/api/documents/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: '1',
        content: message,
        topic_number: docs[0].topic_number,
      }),
    });
  };

  const getDocs = async (search: string) => {
    fetch(`http://localhost:8000/api/documents/?user_id=1&input=${search}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(results => setDocs(results));
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <Summary input={search} list={docs} />
      <ChatInput
        placeholder={
          docs.length > 0
            ? 'Add more thoughts on this topic...'
            : 'What do you want to recall?'
        }
        onSendMessage={docs.length > 0 ? setInput : setSearch}
        buttonDown={docs.length === 0}
      />
    </View>
  );
};

export default Recall;
