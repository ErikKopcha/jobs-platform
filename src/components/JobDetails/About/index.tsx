import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface IAboutProps {
  info: string;
}

const About = ({ info }: IAboutProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
