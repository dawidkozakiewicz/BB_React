// 1. Redux: Create a Redux Store

const reducer = (state = 5) => {
    return state;
}

const store = Redux.createStore(reducer)


// 2. Redux: Get State from the Redux Store

const store = Redux.createStore(
    (state = 5) => state
);

const currentState = store.getState()


// 3. Redux: Define a Redux Action

const action = {
    type: 'LOGIN'
}


// 4. Redux: Define an Action Creator

const action = {
    type: 'LOGIN'
}

function actionCreator() {
    return action;
}


// 5. Redux: Dispatch an Action Event

const store = Redux.createStore(
    (state = { login: false }) => state
);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};

store.dispatch(loginAction());


// 6. Redux: Handle an Action in the Store

const defaultState = {
    login: false
};

const reducer = (state = defaultState, action) => {
    if (action.type === 'LOGIN') {
        return {
            login: true
        }
    } else {
        return defaultState
    };
};

const store = Redux.createStore(reducer);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};


// 7. Redux: Use a Switch Statement to Handle Multiple Actions 

const defaultState = {
    authenticated: false
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { authenticated: true }
        case 'LOGOUT':
            return { authenticated: false }
        default:
            return state
    }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
    return {
        type: 'LOGIN'
    }
};

const logoutUser = () => {
    return {
        type: 'LOGOUT'
    }
};

// 8. Redux: Use const for Action Types


const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';


const defaultState = {
    authenticated: false
};

const authReducer = (state = defaultState, action) => {

    switch (action.type) {

        case LOGIN:
            return {
                authenticated: true
            }

        case LOGOUT:
            return {
                authenticated: false
            }

        default:
            return state;
    }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
    return {
        type: LOGIN
    }
};

const logoutUser = () => {
    return {
        type: LOGOUT
    }
};

// 9. Redux: Register a Store Listener

const ADD = 'ADD';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);
let count = 0;


store.subscribe(() => count += 1)


store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);


// 10. Redux: Combine Multiple Reducers

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = { authenticated: false }, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true
            }
        case LOGOUT:
            return {
                authenticated: false
            }
        default:
            return state;
    }
};

const rootReducer = Redux.combineReducers({
    count: counterReducer,
    auth: authReducer
})

const store = Redux.createStore(rootReducer);


// 11. Redux: Send Action Data to the Store

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
    switch (action.type) {

        case ADD_NOTE:
            return action.text

        default:
            return state;
    }
};

const addNoteText = (note) => {

    return {
        type: ADD_NOTE,
        text: note
    }

};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());


// 12. Redux: Use Middleware to Handle Asynchronous Actions

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return { type: REQUESTING_DATA } }
const receivedData = (data) => { return { type: RECEIVED_DATA, users: data.users } }

const handleAsync = () => {
    return function (dispatch) {
        store.dispatch(requestingData());
        setTimeout(function () {
            let data = {
                users: ['Jeff', 'William', 'Alice']
            }
            store.dispatch(receivedData(data));
        }, 2500);
    }
};

const defaultState = {
    fetching: false,
    users: []
};

const asyncDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUESTING_DATA:
            return {
                fetching: true,
                users: []
            }
        case RECEIVED_DATA:
            return {
                fetching: false,
                users: action.users
            }
        default:
            return state;
    }
};

const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default)
);

// 13. Redux: Write a Counter with Redux

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state = state + 1
        case DECREMENT:
            return state = state - 1
        default:
            return state

    }
}

const incAction = () => { return { type: INCREMENT } }

const decAction = () => { return { type: DECREMENT } }

const store = Redux.createStore(counterReducer)




