import { ADD_ARTICLE } from "../constants/actionTypes";

const time = (new Date(Date.now()-(new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, 17).replace('T', ' ');

const initialState = {
    articles: [
        {'id': 0, 'author': 'Alice', 'time': time, 'title': 'Sample blog post',
            'text': 'Cum sociis natoque penatibus et magnis dis parturient montes,' +
            ' nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem ' +
            'lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. ' +
            'Cras mattis consectetur purus sit amet fermentum.\n' +
            '\n'},
        {'id': 1, 'author': 'Bob', 'time': time, 'title': 'Another blog post',
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
