import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from 'constants';

interface JobItem {
  job_id: string;
}

const dynamicContainer = (selectedJob: string, item: JobItem) => ({
  width: 250,
  padding: SIZES.xLarge,
  backgroundColor: selectedJob === item.job_id ? COLORS.primary : '#FFF',
  borderRadius: SIZES.medium,
  justifyContent: 'space-between',
  ...SHADOWS.medium,
  shadowColor: COLORS.white,
});

const dynamicLogoContainer = (selectedJob: string, item: JobItem) => ({
  width: 50,
  height: 50,
  backgroundColor: selectedJob === item.job_id ? '#FFF' : COLORS.white,
  borderRadius: SIZES.medium,
  justifyContent: 'center',
  alignItems: 'center',
});

const dynamicJobName = (selectedJob: string, item: JobItem) => ({
  fontSize: SIZES.large,
  color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
});

const dynamicPublisher = (selectedJob: string, item: JobItem) => ({
  fontSize: SIZES.medium - 2,
  color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
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
