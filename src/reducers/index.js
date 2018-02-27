import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/actionTypes";

const rootReducer = (state, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            console.log(action.payload);
            return { ...state, articles: state.articles.concat(action.payload) };

        case REMOVE_ARTICLE:
            return { ...state };

        default:
            return state;
    }
};

export default rootReducer;
