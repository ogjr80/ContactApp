import React from 'react'; 
import {Platform} from 'react-native'; 
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation'; 
import Icon from 'react-native-vector-icons/Ionicons'; 

import Contacts from '../screens/Contacts'; 
import Details from '../screens/Details'; 
import NewContact from '../screens/NewContact'; 
import Me from '../screens/Me'; 

import {DrawerButton} from '../components/Header';

import {capitalizeFirstLetter} from '../helpers/string'; 

const LeftDrawerBuitton = ({navigation}) => {
    if(Platform.OS === 'android'){
        return <DrawerButton onPress={() => navigation.navigate('DrawerOpen')} />
    } else {
        return null; 
    }
}

  const ContactsStack = StackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions: (props) => ({
            title: 'Contacts',
            headerLeft: <LeftDrawerBuitton  {...props}/>
        })
    }, 
    Details: {
        screen: Details, 
         navigationOptions: ({ navigation }) => ({
            title: `${capitalizeFirstLetter(navigation.state.params.name.first)}  ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
        })
    },
});
export const NewContactStack = StackNavigator({
    NewContact: {
        screen: NewContact, 
         navigationOptions: (props) => ({
             headerTitle: 'New Contact',
            headerLeft: <LeftDrawerBuitton  {...props}/>
        })
    }, 
})

export const MeStack = StackNavigator({
    Me: {
        screen: Me,
         navigationOptions: (props) => ({
            headerTitle: 'Me',
            headerLeft: <LeftDrawerBuitton  {...props}/>
        })
    },
})

export const Tabs = TabNavigator({
    Contacts: {
        screen: ContactsStack,
        navigationOptions: {
            tabBarLabel: 'Contacts',
            tabBarIcon: ({tintColor}) => <Icon name="ios-list" size={35} color={tintColor} />
        }
    },
    NewContact: {
        screen: NewContactStack,
         navigationOptions: {
            tabBarLabel: 'New Contact',
            tabBarIcon: ({tintColor}) => <Icon name="ios-add" size={35} color={tintColor} />
        }
    }, 
    Me: {
        screen: MeStack,
         navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: ({tintColor}) => <Icon name="ios-contact" size={35} color={tintColor} />
        }
    }
})


//Drawer navigator implementation. 
export const Drawer = DrawerNavigator({
    Contacts: {
        screen: ContactsStack,
        navigationOptions: {
            drawerLabel: 'Contacts',
        }
    }, 
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            drawerLabel: 'New Contact', 
        }
    }, 
    Me: {
        screen: MeStack,
        navigationOption: {
            drawerLabel: 'Me'
        }
    }
})

//exports 
export default ContactsStack; 
