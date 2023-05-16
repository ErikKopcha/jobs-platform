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
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState<string>('');
  const [activeJobType, setActiveJobType] = useState<string>(
    JOB_TYPES[0] || '',
  );

  const onChangeSearchValue = useCallback(
    ({ nativeEvent }: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setSearchValue(nativeEvent.text);
    },
    [],
  );

  const onSelectJobType = useCallback(
    (jobType: string) => {
      console.log({ jobType });
      setActiveJobType(jobType);
      navigation.navigate(`/search/${jobType}` as never);
    },
    [navigation],
  );

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Erik</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchValue}
            onChange={onChangeSearchValue}
            placeholder="What are your looking for?"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
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
