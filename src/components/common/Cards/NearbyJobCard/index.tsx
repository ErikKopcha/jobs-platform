import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { JobItem } from '@src/types';

import { checkImageUrl } from '@src/utils';
import { DEFAULT_LOGO } from '@src/constants/images';
import styles from '@src/components/common/Cards/NearbyJobCard/styles';

interface INearbyJobCard {
  item: JobItem;
  handleNavigate: () => void;
}

const NearbyJobCard = ({
  item,
  handleNavigate,
}: INearbyJobCard): React.ReactElement => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageUrl(item?.employer_logo || '')
              ? item.employer_logo
              : DEFAULT_LOGO,
          }}
          resizeMode={'contain'}
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobType}>{item.job_country}</Text>
        <Text style={styles.jobName} numberOfLines={1}>
          {item.job_title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
