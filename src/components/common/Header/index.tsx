import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import styles, { btnImgDynamicStyle } from './styles';

interface IScreenHeaderBtn {
  iconUrl: ImageSourcePropType;
  dimension: string;
  handlePress: () => void;
}

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: IScreenHeaderBtn): React.ReactElement => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.btnContainer}>
      <Image
        style={{
          ...btnImgDynamicStyle(dimension),
        }}
        source={iconUrl}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
