import {Platform } from 'react-native'; 

const isAndroid = Platform.OS === 'android'; 
const icon = Platform.OS === 'ios' ? 'ios-icon': 'android-icons'; 

export default StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: Platform.OS === 'ios' ? 50: 80
    }, 
}); 