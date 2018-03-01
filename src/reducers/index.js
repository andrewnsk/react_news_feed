import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/actionTypes";

const rootReducer = (state, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: state.articles.concat(action.payload) };

        case REMOVE_ARTICLE:
            console.log('Hello from reducer: ', action.payload);
            return { articles : state.articles.filter( (post) => post.id !== action.payload) };

        default:
            return state;
    }
};

export default rootReducer;
