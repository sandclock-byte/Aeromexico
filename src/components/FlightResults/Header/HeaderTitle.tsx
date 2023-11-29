import styled from "styled-components/native";
import { Icon } from "../../Icon";

export const HeaderTitle = () => {

  const typeSearcher = 'flightNumber';

  if (typeSearcher === 'flightNumber') {
    return (
      <FlightNumberTitle />
    )
  }

  return (
    <DestinationTitle />
  )

}

const FlightNumberTitle = () => {
  return (
    <Container>
      <Title>AM 500</Title>
    </Container>
  )
};

const DestinationTitle = () => {
  return (
    <Container>
      <Title>MEX</Title>
      <IconContainer>
        <Icon
          name='arrow'
          size={20}
        />
      </IconContainer>
      <Title>CUN</Title>
    </Container>
  )
};

const Container = styled.View`
    flex-direction: row;
    margin-Bottom: 5px;
    align-items: center;
`

const Title = styled.Text`
    font-size: 32px;
    color: #000000;
    font-family: Roboto-Bold;
`

const IconContainer = styled.View`
    margin: 0 4px 0 4px;
`