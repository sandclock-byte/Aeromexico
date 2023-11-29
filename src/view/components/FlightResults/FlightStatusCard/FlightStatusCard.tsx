import React from 'react';
import styled from 'styled-components/native';

import { FlightStatus } from '../../../../view-model/interfaces/FlightStatus';
import { Icon } from '../../Icon';
import { FavoriteSwitch, StatusTag } from './components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigators/AppNavigator';
import { AirplaneTimerStatus } from '../../AirplaneTimerStatus';
import { useFlightStatus } from '../../../../view-model/hooks/useFlightStatus';

type Props = {
  item: FlightStatus;
};

export const FlightStatusCard = ({ item }: Props) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { setFlightStatus } = useFlightStatus();

  const { segment, totalFlightTimeInMinutes } = item;
  const {
    departureAirport,
    departureDateTime,
    arrivalAirport,
    arrivalDateTime,
    flightStatus,
    marketingCarrier,
    marketingFlightCode,
  } = segment;


  const handlePressDetails = () => {
    setFlightStatus(item);
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

      <Body>
        <AirplaneTimerStatus
          arrivalDate={new Date(arrivalDateTime)}
          arrivalPlace={arrivalAirport}
          departureDate={new Date(departureDateTime)}
          departurePlace={departureAirport}
          flightTime={totalFlightTimeInMinutes}
          status={flightStatus}
        />
      </Body>

      <Footer>
        <FlightNumber>{`${marketingCarrier} ${marketingFlightCode}`}</FlightNumber>
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
    margin-bottom: 20px;
`;

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Body = styled.View`
    padding: 15px 15px 10px 15px;
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