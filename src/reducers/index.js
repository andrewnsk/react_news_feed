import { ADD_ARTICLE, REMOVE_ARTICLE, LOGIN, LOGOUT } from "../constants/actionTypes";

const rootReducer = (state, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: state.articles.concat(action.payload) };

        case REMOVE_ARTICLE:
            return { ...state, articles : state.articles.filter( (post) => post.id !== action.payload) };

        case LOGIN:
            console.log('Hello from login reducer');
            return { user: {'userType': 'registered', 'userName': 'Vasya'} };

        case LOGOUT:
            console.log('Hello from logout reducer');
            return { user: {'userType': 'anonymous'} };


        default:
            return state;
    }
};

export default rootReducer;
