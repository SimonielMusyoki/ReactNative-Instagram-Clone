import React from 'react';
import { FlatList,View } from 'react-native';
import Story from '../Story';
import stories from '../../data/stories'

const Stories = () => {
    
    return (
        <View style={{height: 130,}}>
            <FlatList 
                data={stories}
                renderItem={({item}) => <Story story={item} />}
                keyExtractor={item=>item.user.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Stories;