import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { Header, ResultsInfo } from '../components/FlightResults';
import { FlatList, View } from 'react-native';
import response from '../data/NumerodeVueloResponse.json'
import { FlightStatusResponse } from '../interfaces/FlightStatusResponse';
import { FlightStatusCard } from '../components/FlightResults';

export const FlightResults = () => {

    const { top } = useSafeAreaInsets();

    const { flightStatusCollection }: FlightStatusResponse = response;

    return (
        <Container paddingTop={top}>
            <Header />
            <ResultsInfo
                details='Mexico City to Cancún'
                totalResults={1}
            />
            <ResultList
                data={flightStatusCollection}
                keyExtractor={(item) => item.segment.segmentCode}
                renderItem={({ item }) => (
                    <FlightStatusCard item={item}/>
                )}
            />
        </Container>
    )
}


const Container = styled.View<{ paddingTop: number }>`
    flex: 1;
    padding-top: ${({ paddingTop }) => paddingTop}px;
    padding-right: 5%;
    padding-left: 5%;
`;

const ResultList = styled.FlatList`
    flex: 1;
`as typeof FlatList;