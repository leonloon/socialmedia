import {StyleSheet} from 'react-native';
import {
  PRIMARY_BACKGROUND,
  PRIMARY_COLOR,
  PRIMARY_TEXT,
  SECONDARY_TEXT,
} from '../../constants/colors';

export default StyleSheet.create({
  usernameText: {
    color: PRIMARY_TEXT,
    fontSize: 16,
    fontWeight: 'bold',
  },
  topSubSection: {
    flexDirection: 'column',
    marginLeft: 12,
  },
  container: {
    backgroundColor: PRIMARY_BACKGROUND,
    borderRadius: 18,
    padding: 24,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: PRIMARY_TEXT,
    borderWidth: 2,
  },
  tagPill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 12,
    marginRight: 8,
    marginTop: 20,
  },
  topSection: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  momentFromNow: {color: SECONDARY_TEXT},
  loveIcon: {
    height: 32,
    width: 32,
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
  },
  favoriteText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
    color: PRIMARY_TEXT,
  },
  bodyText: {color: PRIMARY_TEXT, marginTop: 20},
  trashIcon: {
    height: 25,
    width: 25,
  },
  trashButton: {
    position: 'absolute',
    right: 0,
    marginTop: 35,
    marginRight: 20,
  },
});
