import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

import { NearbyJobCard, ScreenHeaderBtn } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import styles from '../../styles/search';
import { API_URL, RAPID_API_KEY } from '@src/hook/useFetch';
import { JobItem } from '@src/types';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type JobSearchRouteProp = RouteProp<{ params: { id: string } }, 'params'>;

const JobSearch = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  const {
    params: { id },
  } = useRoute<JobSearchRouteProp>();

  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const handleSearch = useCallback(async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: 'GET',
        url: `${API_URL}/search`,
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
        params: {
          query: id,
          page: page.toString(),
          num_pages: '10',
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
      setSearchError(null);
    } catch (e) {
      setSearchError('error');
    } finally {
      setSearchLoader(false);
    }
  }, [page, id]);

  const handlePagination = useCallback(
    (direction: string) => {
      if (direction === 'left' && page > 1) {
        setPage(page - 1);
        handleSearch();
      } else if (direction === 'right') {
        setPage(page + 1);
        handleSearch();
      }
    },
    [handleSearch, page],
  );

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const headerLeft = useCallback(
    () => (
      <ScreenHeaderBtn
        iconUrl={icons.left}
        dimension="60%"
        handlePress={() => navigation.goBack()}
      />
    ),
    [navigation],
  );

  const ListFooterComponent = useCallback(
    () => (
      <View style={styles.footerContainer}>
        <TouchableOpacity
          disabled={searchLoader}
          style={styles.paginationButton}
          onPress={() => handlePagination('left')}>
          <Image
            source={icons.chevronLeft}
            style={styles.paginationImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.paginationTextBox}>
          <Text style={styles.paginationText}>{page}</Text>
        </View>
        <TouchableOpacity
          disabled={searchLoader}
          style={styles.paginationButton}
          onPress={() => handlePagination('right')}>
          <Image
            source={icons.chevronRight}
            style={styles.paginationImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    ),
    [searchLoader, handlePagination, page],
  );

  const ListHeaderComponent = useCallback(
    () => (
      <>
        <View style={styles.container}>
          <Text style={styles.searchTitle}>{id}</Text>
          <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
        </View>
        <View style={styles.loaderContainer}>
          {searchLoader ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            searchError && <Text>Oops something went wrong</Text>
          )}
        </View>
      </>
    ),
    [id, searchError, searchLoader],
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        name={''}
        children={() => <Text />}
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft,
          headerTitle: '',
        }}
      />

      <FlatList
        data={searchResult}
        renderItem={({ item }: { item: JobItem }) => (
          <NearbyJobCard
            handleNavigate={() =>
              navigation.navigate(`/job-details/${item.job_id}` as never)
            }
            item={item}
          />
        )}
        keyExtractor={item => item.job_id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
      />
    </SafeAreaView>
  );
};

export default JobSearch;
