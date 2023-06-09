import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from '../../styles';
import whitepaper from './whitepaper.json';

const WhitepaperScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {whitepaper.map((section, index) => (
        <React.Fragment key={index}>
          <Text style={styles.primaryText}>{section.title}</Text>
          <Text style={styles.secondaryText}>{section.content}</Text>
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

export default WhitepaperScreen;