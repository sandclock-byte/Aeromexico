
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TrackFlight } from '../Screens/TrackFlight';
import { FlightDetails } from '../Screens/FlightDetails';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: '#FFF'
                },
            }}
        >
            <Stack.Screen name='TrackFlight' component={TrackFlight} />
            <Stack.Screen name='FlightDetails' component={FlightDetails} />
        </Stack.Navigator>
    )
}