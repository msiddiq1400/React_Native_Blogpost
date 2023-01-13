import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost':
            return [...state, {
                title: action.payload.title,
                content: action.payload.content,
                id: Math.floor(Math.random() * 999999)
            }];
        case 'delete_blogpost':
            return state.filter((blogpost) => blogpost.id !== action.payload)
        case 'edit_blogpost': 
            return state.map((post) => {
                return post.id === action.payload.id ? action.payload : post;
            })
        default: 
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'add_blogpost', payload: {title, content}});
        if (callback) callback()
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type: 'edit_blogpost', payload: {id, title, content}});
        if (callback) callback()
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogpost', payload: id})
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost},
    [{title: 'Test Post', content: 'Test Content', id: 1}]
);