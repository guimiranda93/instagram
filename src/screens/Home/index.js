import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../../components/Header';
import Post from '../../components/Post';
import styles from './styles';

const Home = () => {
  return (
    <View>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Post
          profilePicture={require('../../assets/profile-1.jpg')}
          profileName="lindsayohana_"
          postDescription="Donec eleifend est magna, a sodales purus venenatis suscipit."
          postImage={require('../../assets/post-1.jpg')}
          hashtags={['instalover', 'likes', 'life']}
        />

        <Post
          profilePicture={require('../../assets/profile-2.jpg')}
          profileName="maria_silva"
          postDescription="Phasellus interdum purus sed mi egestas, sit amet ultrices lorem sagittis. Aenean eu molestie erat."
          postImage={require('../../assets/post-2.jpg')}
          hashtags={['vidaboa']}
        />

        <Post
          profilePicture={require('../../assets/profile-3.jpg')}
          profileName="roberto123"
          postDescription="Nunc elementum sed orci id aliquet. Duis convallis ut massa ut vestibulum. Etiam ac odio vel erat cursus efficitur quis pellentesque metus."
          postImage={require('../../assets/post-3.jpg')}
          hashtags={[]}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
