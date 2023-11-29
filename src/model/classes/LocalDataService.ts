import OrigenDestinoResponse from '../data/OrigenDestinoResponse.json'
import NumerodeVueloResponse from '../data/NumerodeVueloResponse.json'
import { FlightStatus } from "../../view-model/interfaces/FlightStatus";
import { GetFlightByDestinationParams, GetFlightByNumberParams } from "../types/GetFlightByNumberParams";
import { FlightProvider } from "./FlightProvider";

export class LocalDataService implements FlightProvider {

    async getFlightsByNumber({ flightNumber, date }: GetFlightByNumberParams): Promise<FlightStatus[]> {
        delay(2000);
        console.log({ flightNumber, date });
        const { flightStatusCollection } = NumerodeVueloResponse;
        return flightStatusCollection;
    }

    async getFlightsByDestination({ destination, origin, date }: GetFlightByDestinationParams): Promise<FlightStatus[]> {
        delay(2000);
        console.log({ destination, origin, date });
        const { flightStatusCollection } = OrigenDestinoResponse;
        return flightStatusCollection;
    }

}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));