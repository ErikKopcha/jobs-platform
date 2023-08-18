import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import styles from './styles';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { JobItem } from '@src/types';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from '@src/components';
import { COLORS, icons, SIZES } from '@src/constants';

interface IDetailJob {
  route?: RouteProp<{ params: { jobInfo: JobItem } }>;
}

enum TAB_TYPES {
  'ABOUT' = 'About',
  'QUALIFICATIONS' = 'Qualifications',
  'RESPONSIBILITIES' = 'Responsibilities',
}

const TABS = [
  TAB_TYPES.ABOUT,
  TAB_TYPES.QUALIFICATIONS,
  TAB_TYPES.RESPONSIBILITIES,
];

const DetailJob = ({ route }: IDetailJob): React.ReactElement => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  const [refreshing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);

  const { jobInfo } = route?.params || {};

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const headerLeft = useCallback(() => {
    return (
      <ScreenHeaderBtn
        iconUrl={icons.left}
        handlePress={onBack}
        dimension="60%"
      />
    );
  }, [onBack]);

  const headerRight = useCallback(() => {
    return (
      <ScreenHeaderBtn
        iconUrl={icons.share}
        handlePress={() => {}}
        dimension="60%"
      />
    );
  }, []);

  const onRefresh = useCallback(() => {}, []);

  const displayTabContent = useCallback(() => {
    switch (activeTab) {
      case TAB_TYPES.ABOUT:
        return (
          <JobAbout info={jobInfo?.job_description ?? 'No data provided'} />
        );
      case TAB_TYPES.QUALIFICATIONS:
        return (
          <Specifics
            title={TAB_TYPES.QUALIFICATIONS}
            points={jobInfo?.job_highlights?.Qualifications ?? ['N/A']}
          />
        );
      case TAB_TYPES.RESPONSIBILITIES:
        return (
          <Specifics
            title={TAB_TYPES.RESPONSIBILITIES}
            points={jobInfo?.job_highlights?.Responsibilities ?? ['N/A']}
          />
        );
    }
  }, [
    activeTab,
    jobInfo?.job_description,
    jobInfo?.job_highlights?.Qualifications,
  ]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: headerLeft,
          headerRight: headerRight,
          headerTitle: '',
        }}
        name="Info"
        children={() => <Text />}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={jobInfo?.employer_logo || ''}
              companyName={jobInfo?.employer_name || ''}
              location={jobInfo?.job_country || ''}
              jobTitle={jobInfo?.job_title || ''}
            />
            <JobTabs
              tabs={TABS}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {displayTabContent()}
          </View>
        </ScrollView>

        <JobFooter
          url={
            jobInfo?.job_google_link ??
            'https://careers.google.com/jobs/results'
          }
        />
      </>
    </SafeAreaView>
  );
};

export default DetailJob;
