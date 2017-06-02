import React, {Component} from 'react'; 
import {View, Text, FlatList} from 'react-native'; 

import {contacts} from '../config/data'; 
import colors from '../config/colors'; 
import {ListItem} from '../components/ListItem'; 


class Contacts extends Component{
    handleRowPress = (item) => {
        return null; 
    }
    render(){
        return(
          <FlatList
               shouldItemUpdate={() => false}
                style={{ backgroundColor: colors.background}}
                data={contacts}
                renderItem = {
                    ({item}) => 
                        <ListItem 
                            contact={item}
                            onPress={()=> this.handleRowPress(item)}
                        />
                }
                keyExtractor = {
                    (item) => item.email
                }
          /> 
        );
    }
}

export default Contacts;