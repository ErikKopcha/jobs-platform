import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import styles, { dynamicTab, dynamicTabText } from './styles';
import { icons, SIZES } from '@src/constants';
import { useNavigation } from '@react-navigation/native';

const JOB_TYPES = ['Full-time', 'Part-time', 'Contractor'];

const Welcome = (): React.ReactElement => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const navigation = useNavigation();
  const [activeJobType, setActiveJobType] = useState<string>(
    JOB_TYPES[0] || '',
  );

  const onChangeSearchValue = useCallback(
    ({ nativeEvent }: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setSearchTerm(nativeEvent.text);
    },
    [setSearchTerm],
  );

  const onSelectJobType = useCallback(
    (jobType: string) => {
      setActiveJobType(jobType);
      navigation.navigate('search' as never, { id: jobType } as never);
    },
    [navigation],
  );

  const onSearch = useCallback(() => {
    navigation.navigate('search' as never, { id: searchTerm } as never);
  }, [navigation, searchTerm]);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Erik</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchTerm}
            onChange={onChangeSearchValue}
            placeholder="What are your looking for?"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity
          disabled={!searchTerm}
          style={styles.searchBtn}
          onPress={onSearch}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={JOB_TYPES}
          keyExtractor={item => item}
          contentContainerStyle={{
            columnGap: SIZES.small,
          }}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onSelectJobType(item)}
              style={dynamicTab(activeJobType, item)}>
              <Text style={dynamicTabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
