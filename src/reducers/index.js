import { ADD_ARTICLE } from "../constants/actionTypes";

const rootReducer = (state, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: state.articles.concat(action.payload) };
        default:
            return state;
    }
};

export default rootReducer;
