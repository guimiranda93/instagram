import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/logo-insta.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name="md-add-circle-outline"
          size={30}
          color="black"
          style={styles.icon}
        />
        <Icon
          name="heart-outline"
          size={30}
          color="black"
          style={styles.icon}
        />
        <Icon
          name="chatbubble-ellipses-outline"
          size={30}
          color="black"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default Header;
