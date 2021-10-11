import React from 'react';
import {View, Image, Pressable, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Post = ({
  profilePicture,
  profileName,
  postDescription,
  postImage,
  hashtags,
}) => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={profilePicture}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.text}>{profileName}</Text>
        </View>
        <Pressable>
          <Entypo name="dots-three-horizontal" size={18} color="black" />
        </Pressable>
      </View>

      {/* BODY */}
      <View>
        <Image source={postImage} style={styles.postImage} resizeMode="cover" />
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Ionicons
          name="heart-outline"
          size={24}
          color="black"
          style={styles.iconFooter}
        />
        <Ionicons
          name="chatbubble-outline"
          size={24}
          color="black"
          style={styles.iconFooter}
        />
        <Ionicons
          name="paper-plane-outline"
          size={24}
          color="black"
          style={styles.iconFooter}
        />
      </View>

      <View style={styles.likeNamesContainer}>
        <Image
          source={require('../../assets/profile-2.jpg')}
          resizeMode="cover"
          style={[styles.miniAvatar, {zIndex: 1}]}
        />
        <Image
          source={require('../../assets/profile-3.jpg')}
          resizeMode="cover"
          style={[styles.miniAvatar, {marginLeft: -8}]}
        />
        <Text style={styles.likeNames}>
          Curtido por <Text style={styles.bold}>josealmeida</Text> e{' '}
          <Text style={styles.bold}>outras pessoas</Text>
        </Text>
      </View>

      {/* DESCRIPTION */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          <Text style={styles.bold}>{profileName} </Text>
          {postDescription}
          {hashtags.map((item, index) => (
            <Text style={styles.hashtags} key={index.toString()}>
              {' '}
              #{item}
            </Text>
          ))}
        </Text>
      </View>
    </View>
  );
};

export default Post;
