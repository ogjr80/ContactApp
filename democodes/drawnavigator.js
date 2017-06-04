import {DrawerNavigator} from 'react-navigation'; 

export const Drawer = DrawerNavigator({
    Item1: {
        screen: Item1, 
        navigationOptions: {
            drawerLabel: 'Item 1',
            drawerIcon: ({tintColor}) => <ICon  name="ios-list" color={tintColor}/>
        },
    }
})

this.props.navigation.navigate('DrawerOpen'); 
this.props.navigation.navigate('DrawerCloe'); 
