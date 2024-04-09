import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {getHeaderTitle} from '@react-navigation/elements';
import Chat from './src/screens/Chat/Chat';
import Header from './src/components/Header/Header';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Recall from './src/screens/Recall/Recall';

const Drawer = createDrawerNavigator();

const setHeader = ({
  navigation,
  route,
  options,
}: {
  navigation: any;
  route: any;
  options: any;
}) => {
  const title = getHeaderTitle(options, route.name);
  const HeaderRight = options.headerRight;

  return (
    <Header
      title={title}
      openDrawer={() => navigation.openDrawer()}
      HeaderRight={HeaderRight}
    />
  );
};

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Thoughts"
          screenOptions={{
            header: setHeader,
            drawerStyle: {
              backgroundColor: '#000',
            },
            drawerInactiveTintColor: 'grey',
            drawerActiveTintColor: '#7468F3',
          }}>
          <Drawer.Screen name="Thoughts" component={Chat} />
          <Drawer.Screen name="Recall" component={Recall} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
});

export default App;
