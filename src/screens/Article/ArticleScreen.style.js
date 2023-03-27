import {StyleSheet} from 'react-native';
import {
  PRIMARY_BACKGROUND,
  PRIMARY_COLOR,
  PRIMARY_TEXT,
  SECONDARY_BACKGROUND,
  SECONDARY_TEXT,
} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: SECONDARY_BACKGROUND,
    padding: 14,
    height: '100%',
  },
  commentsTitleText: {
    fontWeight: 'bold',
    color: PRIMARY_TEXT,
    fontSize: 18,
  },
  tagContainer: {flexDirection: 'row', flexWrap: 'wrap', marginTop: 20},
  topContainer: {
    backgroundColor: PRIMARY_BACKGROUND,
    borderRadius: 18,
    padding: 24,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  usernameText: {
    color: PRIMARY_TEXT,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tagText: {color: PRIMARY_TEXT},
  topSubSection: {
    flexDirection: 'column',
    marginLeft: 12,
  },
  bodyContainer: {padding: 12},
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
  },
  topSection: {flexDirection: 'row', alignItems: 'center', marginBottom: 20},
  momentFromNow: {color: SECONDARY_TEXT},
  titleText: {
    fontSize: 18,
    color: PRIMARY_TEXT,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descText: {
    fontSize: 16,
    color: PRIMARY_TEXT,
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 16,
    color: PRIMARY_TEXT,
    marginBottom: 20,
  },
  emptyCommentsText: {
    color: SECONDARY_TEXT,
    marginLeft: 12,
    fontSize: 16,
  },
});
