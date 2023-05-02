import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../utils';

const Header = ({title, showBack}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.statusBar} />
      <View style={styles.headerContainer}>
        {showBack && (
          <TouchableOpacity onPress={navigation.goBack}>
            <Text style={styles.backButton}>{'Back'}</Text>
          </TouchableOpacity>
        )}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'ios' ? 30 : StatusBar.currentHeight,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  header: {
    width: '100%',
    height: 85,
    padding: 10,
    backgroundColor: Colors.headerBg,
  },
  backButton: {
    fontSize: 20,
    color: Colors.white,
  },
  titleContainer: {
    zIndex: -1,
    width: '100%',
    position: 'absolute',
  },
  title: {
    flex: 1,
    fontSize: 24,
    textAlign: 'center',
    color: Colors.white,
  },
});

export {Header};
