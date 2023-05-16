import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '@src/constants';

export const btnImgDynamicStyle = (dimension: string) => ({
  width: dimension,
  height: dimension,
  borderRadius: SIZES.small / 1.25,
});

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
});

export default styles;
