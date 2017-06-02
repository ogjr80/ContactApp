import {FlatList} from 'react-native'; 

const Demo = () => {
    <FlatList 
        style={{}}
        data={[]}
        renderItem = { 
            ({item}) => <Text>{item.email}</Text> 
        }
        keyExtractor = {
            (item) => item.email
        }
        />
}