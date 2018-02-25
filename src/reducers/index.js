import { ADD_ARTICLE } from "../constants/actionTypes";
const initialState = {
    articles: [
        {'author': 'Alice', 'time': 'February 24, 2018', 'title': 'Sample blog post',
            'text': 'Cum sociis natoque penatibus et magnis dis parturient montes,' +
            ' nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem ' +
            'lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. ' +
            'Cras mattis consectetur purus sit amet fermentum.\n' +
            '\n'},
        {'author': 'Bob', 'time': 'February 25, 2018', 'title': 'Another blog post',
            'text': 'Cum sociis natoque penatibus et magnis dis parturient montes, ' +
            'nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem ' +
            'lacinia quam venenatis vestibulum. Sed posuere consectetur est at ' +
            'lobortis. Cras mattis consectetur purus sit amet fermentum.'
        }
            ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: state.articles.concat(action.payload) };
        default:
            return state;
    }
};

export default rootReducer;
