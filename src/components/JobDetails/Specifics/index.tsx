import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface ISpecificsProps {
  title: string;
  points: string[];
}

const Specifics = ({ title, points }: ISpecificsProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View key={item + index} style={styles.pointWrapper}>
            <Text style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
