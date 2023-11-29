import styled from 'styled-components/native'

import { AirplaneTimerStatus } from '../AirplaneTimerStatus'

export const TimerStatus = () => {
    return (
        <Container>
            <AirplaneTimerStatus
                hideDuration
                arrivalDate={new Date()}
                arrivalPlace='CAN'
                departureDate={new Date()}
                departurePlace='MEX'
                status='ON_TIME'
            />
        </Container>
    )
}

const Container = styled.View`
    padding-top: 20px;
    padding-bottom: 25px;
    margin-left: 25px;
    margin-right: 25px;
    border-bottom-width: 1px;
    border-color: #CCCCCC;
`
