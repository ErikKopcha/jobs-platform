import { icons } from '@src/constants';
import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

interface ICompanyProps {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
}

const Company = ({
  companyLogo = 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NNICW7diNmGXJfMicpY9eXHKV4sqz05H.jpg',
  jobTitle,
  companyName,
  location,
}: ICompanyProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: companyLogo,
          }}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
