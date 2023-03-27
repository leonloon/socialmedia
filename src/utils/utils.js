import {Alert} from 'react-native';

export const isEmpty = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

export function ShowSuccessAlert({desc}) {
  Alert.alert('Success', desc, [{text: 'OK'}]);
}

export function ShowErrorAlert({desc}) {
  Alert.alert('Error', desc, [{text: 'OK'}]);
}
