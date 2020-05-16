import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Landing(props) {

    
    return (
            <FlatList>
                <ListItem 
                    title="Title"
                    subtitle= "description"
                />
            </FlatList>
        
        
    );
}

export default Landing;