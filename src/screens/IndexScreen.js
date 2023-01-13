import {React, useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext';
import TrashSvg from '../assets/icons/trash.svg';
import PlusSvg from '../assets/icons/plus.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost} = useContext(Context)
    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={(val) => val.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.textStyle}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <TrashSvg width="35" height="35"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <View style={styles.addButtonStyle}>
                <PlusSvg width="25" height="25"/>
            </View>
        </TouchableOpacity>
    };
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        borderTopWidth: 1,
        paddingRight: 7,
        paddingLeft: 3,
        paddingVertical: 12,
    },
    textStyle: {
        fontWeight: '600',
        fontSize: 20,
        color: 'black'
    },
    addButtonStyle: {
        paddingRight: 5,
    }
});