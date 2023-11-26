
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlightDetails } from '../Screens/FlightDetails';
import { SearcherNavigator } from './SearcherNavigator';

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
            <Stack.Screen name='FlightDetails' component={FlightDetails} />
        </Stack.Navigator>
    )
}