import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles, {
  dynamicContainer,
  dynamicJobName,
  dynamicLogoContainer,
} from '@src/components/common/Cards/Popular/styles';
import { JobItem } from '@src/types';
import { checkImageUrl } from '@src/utils';
import { DEFAULT_LOGO } from '@src/constants/images';

interface IPopularJobCardProps {
  item: JobItem;
  selectedJob: string;
  onPress: () => void;
}

const PopularJobCard = ({
  item,
  selectedJob,
  onPress,
}: IPopularJobCardProps): React.ReactElement => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...dynamicContainer(selectedJob, item),
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        style={{
          ...dynamicLogoContainer(selectedJob, item),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: checkImageUrl(item?.employer_logo || '')
              ? item.employer_logo
              : DEFAULT_LOGO,
          }}
          resizeMode={'contain'}
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.companyName}>
        {item?.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.location}>{item.job_country}</Text>
        <Text numberOfLines={1} style={dynamicJobName(selectedJob, item)}>
          {item.job_title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
