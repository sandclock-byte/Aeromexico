import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components/Button';
import { FlightNumberInput } from '../components/FlightNumberSearcher';
import { DateInput } from '../components/DateInput';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { RootTabScreenList } from '../navigators/SearcherNavigator';

const { width } = Dimensions.get('window');

type Props = MaterialTopTabScreenProps<RootTabScreenList, 'FlightNumberSearcher'>;

export const FlightNumberSearcher = ({ navigation }: Props) => {

    const handleSearchFlight = () => { 
        navigation.getParent()?.navigate('FlightResults');
    }

    const handleSearchByDestination = () => {
        navigation.navigate('DestinationSearcher');
    }

    return (
        <Container>
            <FormContainer>
                <InputsContainer>
                    <FlightNumberInput
                        flightNumber='500'
                    />
                    <DateInput 
                        date={new Date(2023,10,21)}
                    />
                </InputsContainer>
                <Button
                    title='Search Flight'
                    onPress={handleSearchFlight}
                />
                <HintContainer>
                    <HintText>
                        Can't find your flight number?
                    </HintText>
                    <HintText>
                        Try searching by{' '}
                        <LinkText
                            onPress={handleSearchByDestination}
                        >
                            destination
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

const InputsContainer = styled.View`
    flex-direction: row;
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