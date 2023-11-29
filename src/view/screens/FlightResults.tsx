
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Header, ResultsInfo } from '../components/FlightResults';
import { FlightStatusCard } from '../components/FlightResults';
import { useSearchingData } from '../../view-model/hooks/useSearchingData';

export const FlightResults = () => {

    const { top } = useSafeAreaInsets();

    const { flightSearch } = useSearchingData();

    const { isLoading, flightResults, departure, arrival } = flightSearch;

    const departureName = departure?.name || '';
    const arrivalName = arrival?.name || '';

    return (
        <Container paddingTop={top}>
            <Header />
            <ResultsInfo
                details={`${departureName} to ${arrivalName}`}
                totalResults={flightResults.length}
                isLoading={isLoading}
            />
            {
                (!isLoading) && (
                    <ResultList
                        data={flightResults}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => item.segment.segmentCode + index}
                        renderItem={({ item }) => (
                            <FlightStatusCard item={item} />
                        )}
                        ListFooterComponent={() => <Footer />}
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

const Footer = styled.View`
    height: 100px;
`;