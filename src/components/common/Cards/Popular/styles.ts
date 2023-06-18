import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '@src/constants';
import { JobItem } from '@src/types';

export const dynamicContainer = (selectedJob: string, item: JobItem) => ({
  width: 250,
  padding: SIZES.xLarge,
  backgroundColor:
    !!item && selectedJob === item.job_id ? COLORS.primary : '#FFF',
  borderRadius: SIZES.medium,
  ...SHADOWS.medium,
  shadowColor: COLORS.white,
});

export const dynamicLogoContainer = (selectedJob: string, item: JobItem) => ({
  width: 50,
  height: 50,
  backgroundColor: item && selectedJob === item.job_id ? '#FFF' : COLORS.white,
  borderRadius: SIZES.medium,
});

export const dynamicJobName = (selectedJob: string, item: JobItem) => ({
  fontSize: SIZES.large,
  color: item && selectedJob === item.job_id ? COLORS.white : COLORS.primary,
});

export const dynamicPublisher = (selectedJob: string, item: JobItem) => ({
  fontSize: SIZES.medium - 2,
  color: item && selectedJob === item.job_id ? COLORS.white : COLORS.primary,
});

const styles = StyleSheet.create({
  logoImage: {
    width: '70%',
    height: '70%',
  },
  companyName: {
    fontSize: SIZES.medium,
    color: '#B3AEC6',
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  location: {
    fontSize: SIZES.medium - 2,
    color: '#B3AEC6',
  },
});

export default styles;
