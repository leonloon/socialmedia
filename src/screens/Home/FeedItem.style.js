import {StyleSheet} from 'react-native';
import {
  PRIMARY_BACKGROUND,
  PRIMARY_COLOR,
  PRIMARY_TEXT,
  SECONDARY_TEXT,
} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_BACKGROUND,
    borderRadius: 18,
    padding: 24,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  articleTitleText: {
    color: PRIMARY_TEXT,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  descText: {color: SECONDARY_TEXT, marginTop: 10},
  usernameText: {
    color: PRIMARY_TEXT,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tagContainer: {flexDirection: 'row', flexWrap: 'wrap'},
  tagText: {color: PRIMARY_TEXT},
  topSubSection: {
    flexDirection: 'column',
    marginLeft: 12,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
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
  topSection: {flexDirection: 'row', alignItems: 'center'},
  momentFromNow: {color: SECONDARY_TEXT},
});
