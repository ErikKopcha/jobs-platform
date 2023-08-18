import React, { useCallback } from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { icons } from '@src/constants';

interface IFooterProps {
  url: string;
}

const Footer = ({ url }: IFooterProps): React.ReactElement => {
  const onOpenUrl = useCallback(() => {
    Linking.openURL(url);
  }, [url]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode={'contain'}
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn} onPress={onOpenUrl}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
