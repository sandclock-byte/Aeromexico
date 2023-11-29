
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { Header, ResultsInfo } from '../components/FlightResults';
import { FlatList } from 'react-native';
import { FlightStatusCard } from '../components/FlightResults';
import { useSearchingData } from '../../view-model/hooks/useSearchingData';

export const FlightResults = () => {

    const { top } = useSafeAreaInsets();

    const { flightSearch } = useSearchingData();

    const { isLoading, flightResults } = flightSearch;

    return (
        <Container paddingTop={top}>
            <Header />
            <ResultsInfo
                details='Mexico City to Cancún'
                totalResults={1}
                isLoading={isLoading}
            />
            {
                (!isLoading) && (
                    <ResultList
                        data={flightResults}
                        keyExtractor={(item) => item.segment.segmentCode}
                        renderItem={({ item }) => (
                            <FlightStatusCard item={item} />
                        )}
                    />
                )
            }
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