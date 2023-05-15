import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from 'constants';

const dynamicBtn = (name: string, activeTab: string) => ({
  paddingVertical: SIZES.medium,
  paddingHorizontal: SIZES.xLarge,
  backgroundColor: name === activeTab ? COLORS.primary : '#F3F4F8',
  borderRadius: SIZES.medium,
  marginLeft: 2,
  ...SHADOWS.medium,
  shadowColor: COLORS.white,
});

const dynamicBtnText = (name: string, activeTab: string) => ({
  fontFamily: 'DMMedium',
  fontSize: SIZES.small,
  color: name === activeTab ? '#C3BFCC' : '#AAA9B8',
});

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
});

export default styles;
