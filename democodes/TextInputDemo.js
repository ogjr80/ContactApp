import {TextInput} from 'react-native'; 


<TextInput
    placeholder="Enter first name..."
    style={{widht: 300, height: 400}}
    onChangeText = {(text) => console.log(text)}
    autoCorrect={false}
    autoCapitalize="none" // sentences, words, character
> 
</TextInput> 