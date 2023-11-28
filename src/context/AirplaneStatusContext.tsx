import { createContext } from "react";

type AirplaneStatusContextType = {
    progress: number;
};
type Props = {
    progress: number;
    children: JSX.Element | JSX.Element[];
};

export const AirplaneStatusContext = createContext<AirplaneStatusContextType>({} as AirplaneStatusContextType);


export const AirplaneStatusProvider = ({ children, progress }: Props) => {

    return (
        <AirplaneStatusContext.Provider value={{ progress }}>
            {children}
        </AirplaneStatusContext.Provider>
    )
}