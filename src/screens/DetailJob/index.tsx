import { Animated, SafeAreaView, ScrollView, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { RouteProp } from '@react-navigation/native';
import { JobItem } from '@src/types';
import Text = Animated.Text;

interface IDetailJob {
  route?: RouteProp<{ params: { jobInfo: JobItem } }>;
}

const DetailJob = ({ route }: IDetailJob): React.ReactElement => {
  const { jobInfo } = route?.params || {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text>{jobInfo?.job_title}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailJob;
