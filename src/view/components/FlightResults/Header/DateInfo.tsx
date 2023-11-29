import styled from 'styled-components/native'
import { Icon } from '../../Icon'
import { DateService } from '../../../../classes/DateService';

export const DateInfo = () => {

    const dateDisplay = new DateService(new Date()).display();

    const handlePress = () => {
        console.log('Open date picker');
    }

    return (
        <Container>
            <DateData>{dateDisplay}</DateData>
            <Line />
            <ChangeContainer>
                <Icon
                    name='calendar'
                    size={12.88}
                />
                <Link
                    onPress={handlePress}
                >
                    Change
                </Link>
            </ChangeContainer>
        </Container>
    )
}

const Container = styled.View`
    flex-direction: row;
    align-items: center;
`

const DateData = styled.Text`
    font-size: 16px;
    color: #000000;
    font-family: Roboto-Regular;
`

const Line = styled.View`
    width: 2px;
    height: 16px;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 0px 10px 0px 10px;
`

const ChangeContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

const Link = styled.Text`
    font-size: 16px;
    color: #000000;
    text-decoration: underline;
    font-family: Roboto-Regular;
    margin-left: 6px;
`