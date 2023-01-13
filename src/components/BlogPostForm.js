import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
                value={title} 
                onChangeText={(text) => setTitle(text)}
                placeholder="Enter Title"
                style={styles.input}
            />

            <Text style={styles.label}>Enter Content:</Text>
            <TextInput 
                value={content} 
                onChangeText={(text) => setContent(text)}
                placeholder="Enter Context"
                style={styles.input}
            />

            <View style={styles.button}>
                <Button 
                    title="Save Blog Post"
                    onPress={() => onSubmit(title, content)}
                />
            </View>
        </View>
    );
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 5,
        marginBottom: 15,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    },
    button: {
        marginTop: 20
    }
});