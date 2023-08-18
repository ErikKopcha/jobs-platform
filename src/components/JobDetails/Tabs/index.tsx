import React, { useCallback } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles, { dynamicBtn, dynamicBtnText } from './styles';
import { SIZES } from '@src/constants';

interface ITabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
interface ITabButtonProps {
  name: string;
  activeTab: string;
  onHandleSearchType: (tab: string) => void;
}

const TabButton = ({
  name,
  activeTab,
  onHandleSearchType,
}: ITabButtonProps): React.ReactElement => {
  const onPress = useCallback(() => {
    onHandleSearchType(name);
  }, [name, onHandleSearchType]);

  return (
    <TouchableOpacity style={dynamicBtn(name, activeTab)} onPress={onPress}>
      <Text style={dynamicBtnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

const Tabs = ({
  tabs,
  activeTab,
  setActiveTab,
}: ITabsProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
