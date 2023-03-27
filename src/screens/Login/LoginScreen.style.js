import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR,
  PRIMARY_TEXT,
  SECONDARY_BACKGROUND,
} from '../../constants/colors';

export default StyleSheet.create({
  logo: {
    height: 150,
    width: 150,
  },
  cross: {
    height: 50,
    width: 50,
  },
  title: {
    color: PRIMARY_COLOR,
    fontSize: 48,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 100,
  },
  container: {
    backgroundColor: SECONDARY_BACKGROUND,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 48,
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 36,
    paddingVertical: 12,
    borderRadius: 36,
    marginTop: 12,
    height: 70,
    justifyContent: 'center',
  },
  buttonText: {
    color: PRIMARY_TEXT,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
