import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Header.styles';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = ({
  title,
  openDrawer,
  onNewChat,
}: {
  title: string;
  openDrawer: () => void;
  onNewChat?: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Icon
          name="menu-fold"
          size={20}
          color="#fff"
          onPress={() => openDrawer()}
        />
      </View>
      <Text style={styles.name}>{title}</Text>
      <View>
        <Icon
          name="pluscircleo"
          size={20}
          color="#fff"
          onPress={() => onNewChat && onNewChat()}
        />
      </View>
    </View>
  );
};

export default Header;
