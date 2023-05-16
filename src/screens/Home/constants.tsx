import React from 'react';
import { COLORS, icons, images } from '@src/constants';
import { ScreenHeaderBtn } from '@src/components';

export const HOME_SCREEN_OPTIONS = {
  headerStyle: {
    backgroundColor: COLORS.lightWhite,
  },
  headerShadowVisible: false,
  headerLeft: () => (
    <ScreenHeaderBtn
      handlePress={() => {}}
      iconUrl={icons.menu}
      dimension={'60%'}
    />
  ),
  headerRight: () => (
    <ScreenHeaderBtn
      handlePress={() => {}}
      iconUrl={images.profile}
      dimension={'100%'}
    />
  ),
  headerTitle: '',
};
