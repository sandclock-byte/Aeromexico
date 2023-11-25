import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { HeaderTrackFlight } from '../components/HeaderTrackFlight'
import { SearcherNavigator } from '../navigators/SearcherNavigator'

export const TrackFlight = () => {
    return (
        <Container>
            <SearcherNavigator/>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`
