import {React, useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext';

export const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context)
    return (
        <View>
            <Button title='Add Blog Post' onPress={addBlogPost}/>
            <FlatList 
                data={state}
                keyExtractor={(val) => val.title}
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});