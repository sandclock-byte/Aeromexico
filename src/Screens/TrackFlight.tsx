import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { HeaderTrackFlight } from '../components/HeaderTrackFlight'

export const TrackFlight = () => {
    return (
        <Container>
            <HeaderTrackFlight />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`
