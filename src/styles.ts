import { StyleSheet } from 'react-native';

interface Style {}

export const createStyleSheet = () => {
  return StyleSheet.create<Style>({});
};
