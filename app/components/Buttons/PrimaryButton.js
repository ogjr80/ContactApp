import React from 'react'; 
import {TouchableOpacity, Text, View} from 'react-native'; 

import styles from './styles'; 

 const PrimaryButton = ({label, onPress}) => {
    return (
        <View style={ styles.PrimaryButtonContainer}> 
            <TouchableOpacity 
                style={styles.PrimaryButton}
                onPress={onPress}
            >
                <Text style={styles.PrimaryButtonText}>{label}</Text> 
            </TouchableOpacity>
        </View>
    )
}


export default PrimaryButton; 
