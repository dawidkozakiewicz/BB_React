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


// 14. Redux: Never Mutate State

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail
    let arr = state.map(x => x);
      arr.push(action.todo);
      return arr;
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);


// 14. Redux: Use the Spread Operator on Arrays

const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
        let arr = [...state,action.todo]
        return arr;
        // don't mutate state here or the tests will fail
        
      default:
        return state;
    }
  };
  
  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }
  
  const store = Redux.createStore(immutableReducer);


  // 15. Redux: Remove an Item from an Array

  const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
        // don't mutate state here or the tests will fail
        let newState = [...state];
        newState.splice(action.index, 1);
        return newState;
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }
  
  const store = Redux.createStore(immutableReducer);


  // 16. Redux: Copy an Object with Object.assign

  const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };
  
  const immutableReducer = (state = defaultState, action) => {
    switch(action.type) {
      case 'ONLINE':
        // don't mutate state here or the tests will fail
        let newObject = Object.assign({},defaultState);
        newObject.status='online';
        return newObject;
      default:
        return state;
    }
  };
  
  const wakeUp = () => {
    return {
      type: 'ONLINE'
    }
  };
  
  const store = Redux.createStore(immutableReducer);





