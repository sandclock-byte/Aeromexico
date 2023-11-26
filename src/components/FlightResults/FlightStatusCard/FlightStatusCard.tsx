import React from 'react';
import styled from 'styled-components/native';

import { FlightStatus } from '../../../interfaces/FlightStatusResponse';
import { Icon } from '../../Icon';
import { FavoriteSwitch, StatusTag, TimerStatus } from './components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigators/AppNavigator';

type Props = {
  item: FlightStatus;
};

export const FlightStatusCard = ({ item }: Props) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePressDetails = () => {
    navigation.navigate('FlightDetails');
  };

  return (
    <Container>
      <Header>
        <StatusTag
          status={item.status}
        />
        <FavoriteSwitch />
      </Header>
      <TimerStatus />
      <Footer>
        <FlightNumber>{`${'AM'} ${500}`}</FlightNumber>
        <DetailsButton
          activeOpacity={0.8}
          onPress={handlePressDetails}
        >
          <LinkText>Details</LinkText>
          <Icon
            name='back_arrow'
            size={8}
            color='black'
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </DetailsButton>
      </Footer>
    </Container>
  )
}

const Container = styled.View`
    border-radius: 12px;
    border: 2px solid #000;
    overflow: hidden;
`;

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top-width: 1px;
    border-top-color: rgba(0,0,0,0.4);
    padding: 5px 15px 5px 15px;
`;

const FlightNumber = styled.Text`
    font-size: 12px;
    color: #000000;
    font-family: Roboto-Bold;
`;

const DetailsButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

const LinkText = styled.Text`
    font-size: 11px;
    color: #000000;
    font-family: Roboto-Regular;
    text-decoration: underline;
    margin-right: 8px;
`;