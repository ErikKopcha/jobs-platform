import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@src/constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  container: {
    flex: 1,
    padding: SIZES.medium,
  },
});

export default styles;
