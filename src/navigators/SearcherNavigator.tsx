import { MaterialTopTabBarProps, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlightNumberSearcher } from '../screens/FlightNumberSearcher';
import { DestinationSearcher } from '../screens/DestinationSearcher';
import { TabBarSearcherOptions } from '../components/TabBarSearcherOptions';

export type RootTabScreenList = {
    FlightNumberSearcher: undefined;
    DestinationSearcher: undefined;
};
const Tab = createMaterialTopTabNavigator<RootTabScreenList>();

export const SearcherNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={(props: MaterialTopTabBarProps) => <TabBarSearcherOptions {...props} />}
            screenOptions={{
                swipeEnabled: false,
            }}
            sceneContainerStyle={{
                backgroundColor: '#FFF'
            }}
        >
            <Tab.Screen name='FlightNumberSearcher' component={FlightNumberSearcher} />
            <Tab.Screen name='DestinationSearcher' component={DestinationSearcher} />
        </Tab.Navigator>
    )
}
