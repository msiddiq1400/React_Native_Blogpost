import React, {useContext} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context } from "../context/BlogContext";
import EditSvg from '../assets/icons/edit.svg';

export const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const {state} = useContext(Context)
    const blogPost = state.find((post) => post.id === id);

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => {
            return <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <View style={styles.editIcon}>
                <EditSvg width="25" height="25" />
            </View>
        </TouchableOpacity>
        }
    };
}

const styles = StyleSheet.create({
    editIcon: {
        marginRight: 10
    }
})