import { MaterialTopTabBarProps, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlightNumberSearcher } from '../screens/FlightNumberSearcher';
import { DestinationScreen } from '../screens/DestinationScreen';
import { TabBarSearcherOptions } from '../components/TabBarSearcherOptions';


export type RootTabScreenList = {
    FlightNumberScreen: undefined;
    DestinationScreen: undefined;
};
const Tab = createMaterialTopTabNavigator<RootTabScreenList>();

export const SearcherNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={(props: MaterialTopTabBarProps) => <TabBarSearcherOptions {...props} />}
            sceneContainerStyle={{
                backgroundColor: '#FFF'
            }}
        >
            <Tab.Screen name="FlightNumberScreen" component={FlightNumberSearcher} />
            <Tab.Screen name="DestinationScreen" component={DestinationScreen} />
        </Tab.Navigator>
    )
}
