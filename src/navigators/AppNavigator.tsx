
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlightDetails } from '../screens/FlightDetails';
import { SearcherNavigator } from './SearcherNavigator';
import { FlightResults } from '../screens/FlightResults';

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
            <Stack.Screen name='SearcherNavigator' component={SearcherNavigator} />
            <Stack.Screen name='FlightResults' component={FlightResults} />
            <Stack.Screen name='FlightDetails' component={FlightDetails} />
        </Stack.Navigator>
    )
}