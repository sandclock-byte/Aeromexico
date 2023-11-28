import { Animated } from 'react-native';
import styled from 'styled-components/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useFadeIn } from '../hooks/useFadeIn';
import { DetailsTable, FlightInfo, TimerStatus } from '../components/FlightDetails';

export const FlightDetails = () => {

    const { fadeIn, opacity } = useFadeIn();
    const { bottom } = useSafeAreaInsets();

    return (
        <Container>
            <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/6999/5ac1/5c32d800b7f87760fab16801c4a62e6d?Expires=1702252800&Signature=qGomywLQcMUxvnNeknZd0iFrQSXXE8vbQQtx6F~X3JFZGpbaOCR7FSJGXdQqf3~wj~AnKMqaVvUW6FgSu9MZbTHMx4KSEcCmW1sw1r~t6IFL~xAwZ9FJ2IeI3~8xyNPDqBa3U3k15qDbhu70jH~cB8vnOXO9h3nHS4orJ0qmUKbFE8Tw5RkVw9aKYtdeQtJWdSdorkF8QpZPePzgRyDKYi3oIIW3FMvwVKt1v8whPbLZAJ-MlW6-K4dmO0UILOpvKO8qvLZ6nrYl0k~lNbDclkX1Dh28vWsVepnCJJsMQvyMKuvKJAnCh~3Scj4tErzSOkjeWCHoo7nBN9p~ZNsrXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
                onLoadEnd={() => fadeIn()}
                style={{ opacity }}
            />

            <DetailsContainer pb={bottom}>
                <Line />
                <FlightInfo />
                <TimerStatus />
                <DetailsTable />
            </DetailsContainer>

        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`

const Image = styled(Animated.Image)`
    height: 600px;
    width: 600px;
    top: -104px;
    left: -22px;
    position: absolute;
`

const DetailsContainer = styled.View<{ pb: number }>`
    background-color: #FFFFFF;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding-bottom: ${({ pb }) => pb + 58}px;
`

const Line = styled.View`
    height: 5px;
    width: 36px;
    background-color: #CCCCCC;
    border-radius: 2.5px;
    align-self: center;
    top: 10px;
    position: absolute;
`;
