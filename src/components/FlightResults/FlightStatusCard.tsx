import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlightStatus } from '../../interfaces/FlightStatusResponse';

type Props = {
  item: FlightStatus;
};

export const FlightStatusCard = ({ item }: Props) => {
  return (
    <View>
      <Text>FlightStatus</Text>
    </View>
  )
}


const styles = StyleSheet.create({

});