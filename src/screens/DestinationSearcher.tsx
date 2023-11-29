import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Dimensions } from 'react-native';
import { RootTabScreenList } from '../navigators/SearcherNavigator';
import styled from 'styled-components/native';
import { PlaceInput } from '../components/PlaceInput';
import { DateInput } from '../components/DateInput';
import { Button } from '../components/Button';

const { width } = Dimensions.get('window');

type Props = MaterialTopTabScreenProps<RootTabScreenList, 'DestinationScreen'>;

export const DestinationSearcher = ({ navigation }: Props) => {

  const handleSearchFlight = () => {
    navigation.getParent()?.navigate('FlightResults');
  }


  return (
    <Container>
      <FormContainer>
        <PlaceInputsContainer>
          <PlaceInput
            typeInput='Origin'
            place='Mexico City'
            placeCode='MEX'
          />
          <PlaceInput
            typeInput='Destination'
            place='Cancún'
            placeCode='CUN'
          />
        </PlaceInputsContainer>
        <DateInputContainer>
          <DateInput
            date={new Date(2023, 10, 21)}
          />
        </DateInputContainer>
        <Button
          title='Search Flights'
          onPress={handleSearchFlight}
        />

        <HintContainer>
          <HintText>
            Looking for a specific flight?
          </HintText>
          <HintText>
            Try searching by{' '}
            <LinkText
              onPress={handleSearchFlight}
            >
              flight number
            </LinkText>
          </HintText>
        </HintContainer>
      </FormContainer>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
`;

const FormContainer = styled.View`
    width: ${width * 0.85}px;
    align-self: center;
    margin-top: 42px;
`;

const PlaceInputsContainer = styled.View`
    flex-direction: row;
`;

const DateInputContainer = styled.View`
  flex-direction: row;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const HintContainer = styled.View`
    margin-top: 30px;
`;

const HintText = styled.Text`
    font-size: 12px;
    font-family: 'Roboto-Regular';
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    line-height: 22px;
`;

const LinkText = styled.Text`
    font-family: 'Roboto-Bold';
    text-decoration-line: underline;
`;