import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginRight: 10,
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postImage: {
    width: width,
    height: 280,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  iconFooter: {
    marginRight: 12,
  },
  miniAvatar: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
  },
  likeNames: {
    fontSize: 12,
    color: 'black',
    marginLeft: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  likeNamesContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: 'center',
  },
  description: {
    fontSize: 12,
    color: 'black',
    lineHeight: 16,
  },
  descriptionContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  hashtags: {
    color: '#0569FF',
  },
});
