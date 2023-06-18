import { SafeAreaView, ScrollView, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { NearbyJobs, PopularJobs, Welcome } from '@src/components';

const Home = (): React.ReactElement => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Welcome />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
