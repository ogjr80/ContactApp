import React from 'react'; 
import {View,Text} from 'react-native';

import styles from './styles'; 


const TextInput = (props) => {
    return (
        <View style={styles.container}> 
            <TextInput 
                autoCorrect={false}
                autoCapitalize = "none"
                style={styles.input}
                {...props} 
            />
            
        </View> 
    )
}; 



export default TextInput; 
