import {TabNavigator} from 'react-navigation'

export const Tabs = TabNavigator({
    Tab1: {
        screen: Tab1,
        navigationOptions: {
            tabBarLabel: 'Tab 1 Label', 
            tabBarIcon: ({tintColor}) => <Icon name="ios-list" color={tintColor}/> 
        }
    },
    Tab2: {
        screen: Tab2,
    }
})