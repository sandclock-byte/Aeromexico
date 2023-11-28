import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { RootTabScreenList } from '../navigators/SearcherNavigator';
import styled from 'styled-components/native';
import { PlaceInput } from '../components/PlaceInput';
import { DateInput } from '../components/DateInput';
import { Button } from '../components/Button';

const { width } = Dimensions.get('window');

type Props = MaterialTopTabScreenProps<RootTabScreenList, 'DestinationScreen'>;

export const DestinationSearcher = ({ }: Props) => {
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
          <DateInput />
        </DateInputContainer>
        <Button
          title='Search Flights'
        />
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