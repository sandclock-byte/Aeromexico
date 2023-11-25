import { MaterialTopTabBarProps, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlightNumberScreen } from '../Screens/FlightNumberScreen';
import { DestinationScreen } from '../Screens/DestinationScreen';
import { TabBarSearcherOptions } from '../components/TabBarSearcherOptions';

const Tab = createMaterialTopTabNavigator();

export const SearcherNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={(props: MaterialTopTabBarProps) => <TabBarSearcherOptions {...props} />}
            sceneContainerStyle={{
                backgroundColor: '#FFF'
            }}
        >
            <Tab.Screen name="FlightNumberScreen" component={FlightNumberScreen} />
            <Tab.Screen name="DestinationScreen" component={DestinationScreen} />
        </Tab.Navigator>
    )
}
