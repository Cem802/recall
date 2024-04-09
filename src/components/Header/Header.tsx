import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Header.styles';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = ({
  title,
  openDrawer,
  HeaderRight,
}: {
  title: string;
  openDrawer: () => void;
  HeaderRight?: () => React.JSX.Element;
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
      <View>{HeaderRight && <HeaderRight />}</View>
    </View>
  );
};

export default Header;
