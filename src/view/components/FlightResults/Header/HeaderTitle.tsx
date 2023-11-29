import styled from "styled-components/native";
import { Icon } from "../../Icon";
import { useSearchingData } from "../../../../view-model/hooks/useSearchingData";

export const HeaderTitle = () => {

  const { flightSearch } = useSearchingData();

  const { searchingtype } = flightSearch;

  if (searchingtype === 'flightNumber') {
    return (
      <FlightNumberTitle />
    )
  }

  return (
    <DestinationTitle />
  )

}

const FlightNumberTitle = () => {

  const { flightSearch } = useSearchingData();
  const { carrier, number } = flightSearch.flightNumber;

  return (
    <Container>
      <Title>{`${carrier} ${number}`}</Title>
    </Container>
  )
};

const DestinationTitle = () => {

  const { flightSearch } = useSearchingData();
  const { departure, arrival } = flightSearch;

  const departureCode = departure?.code || '';
  const arrivalCode = arrival?.code || '';

  return (
    <Container>
      <Title>{departureCode}</Title>
      <IconContainer>
        <Icon
          name='arrow'
          size={20}
        />
      </IconContainer>
      <Title>{arrivalCode}</Title>
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