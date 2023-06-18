import React, { useCallback, useMemo } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { COLORS, SIZES } from '@src/constants';
import PopularJobCard from '@src/components/common/Cards/Popular';
import useFetch from '@src/hook/useFetch';
import { JobItem } from '@src/types';
import { useNavigation } from '@react-navigation/native';

const PopularJobs = (): React.ReactElement => {
  const navigation = useNavigation();

  const { data, isLoading, error } = useFetch({
    endpoint: 'search',
    queryParams: {
      query: 'React developer',
      num_pages: 1,
    },
  });

  const onPress = useCallback(
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

    return (
      <FlatList
        keyExtractor={item => item.toString()}
        data={data as unknown as JobItem[]}
        renderItem={({ item, index }: { item: JobItem; index: number }) => (
          <PopularJobCard
            key={`popular-${item.job_id}-${index}`}
            item={item}
            selectedJob={''}
            onPress={() => onPress(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        horizontal
      />
    );
  }, [isLoading, error, data, onPress]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>{cardsContainerContent}</View>
    </View>
  );
};

export default PopularJobs;
