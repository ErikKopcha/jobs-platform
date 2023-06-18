import React, { useCallback, useMemo } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { COLORS } from '@src/constants';
import useFetch from '@src/hook/useFetch';
import NearbyJobCard from '@src/components/common/Cards/NearbyJobCard';
import { JobItem } from '@src/types';
import { useNavigation } from '@react-navigation/native';

const NearbyJobs = (): React.ReactElement => {
  const navigation = useNavigation();

  const { data, isLoading, error } = useFetch({
    endpoint: 'search',
    queryParams: {
      query: 'React developer',
      num_pages: 1,
    },
  });

  const handleNavigate = useCallback(
    (jobInfo: JobItem) => {
      navigation.navigate(
        'Job Details' as never,
        {
          jobInfo,
        } as never,
      );
    },
    [navigation],
  );

  const cardsContainerContent = useMemo(() => {
    if (isLoading) {
      return <ActivityIndicator size="large" color={COLORS.primary} />;
    }

    if (error) {
      return <Text>{error || 'Something went wrong'}</Text>;
    }

    return (data as unknown as JobItem[]).map((item: JobItem) => (
      <NearbyJobCard
        key={`nearby-${item.job_id}`}
        item={item}
        handleNavigate={() => handleNavigate(item)}
      />
    ));
  }, [isLoading, error, data, handleNavigate]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>{cardsContainerContent}</View>
    </View>
  );
};

export default NearbyJobs;
