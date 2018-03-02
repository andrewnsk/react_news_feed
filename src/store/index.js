import { createStore } from "redux";
import rootReducer from "../reducers/index";

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
            ],
    user: {'userType': 'anonymous', 'someInfo': 'testString'},
    header: {'title': 'Default title'}
};

// const storageState = localStorage.setItem('reduxState', JSON.stringify(initialState));

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : initialState;
const store = createStore(rootReducer, persistedState);

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})


export default store;
